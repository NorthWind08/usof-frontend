import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../redux/slices/usersReducer";
import Button from "../Buttons/Button";
import {useNavigate} from "react-router";

const Response = ({commentData}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.users);
    useEffect(() => {
        dispatch(fetchUser({id: commentData.author}))
    }, []);

    console.log(user);
    return (
        <div className={'bg-gray-100 ml-8 border-b border-b-black'}>
            <div className={'flex flex-col p-2 pl-4'}>
                <div>
                    {user && (
                        <Button
                            className={'text-black'}
                            onClick={e => {
                                navigate(`/users/${user.users?.id}`)
                            }}
                        >
                            {user.users?.login}
                        </Button>
                    )}
                </div>
                <div className={'pl-4'}>
                    <span>{commentData.content}</span>
                </div>
                <br/>
                <div className={'flex flex-row gap-6'}>
                </div>
            </div>

        </div>
    );
};

export default Comment;