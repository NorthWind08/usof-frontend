import {useState} from 'react';
import Button from "../Buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchCreateComment} from "../../redux/slices/commentReducer";

const CommentForm = ({postID}) => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth?.data)

    const handleCommentSend = async(e) => {

        const data = dispatch(
            fetchCreateComment({
                id: postID,
                content: comment
            })
        )
    }

    return (
        <div className={'p-4 pl-8'}>
            <form onSubmit={handleCommentSend} className={'flex flex-col w-fit'}>
                <span className={'text-l font-medium pb-2'}>Reply</span>
                <div className={'flex flex-row gap-2'}>
                    <input
                        className={'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded'}
                        type="textarea" value={comment}
                        minLength={1} onChange={e => {
                        setComment(e.target.value);
                    }}/>

                    <Button
                        className={
                            'border-2 px-2 py-1.5 border-gray-600 text-gray-700 rounded-md bg-white text-l' +
                            ' ease-in-out duration-100 hover:bg-blue-100 hover:text-black'
                        }
                        type={'submit'}
                    >
                        Send</Button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;