import React, {useState} from 'react';
import Button from "../Buttons/Button";

const Rating = ({entityID, entityType, initialRating}) => {

    const [rating, setRating] = useState(initialRating);
    const [like, setLike] = useState('');
    const handleLike = (lastPressed) => {
        if (lastPressed === like) {
            return;
        }
        setLike(lastPressed);
    }

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <Button
                className={
                    'p-0.5 px-2 border-1 rounded-3xl bg-gray-500 text-xl' +
                    ((like === 'like') ? ' bg-green-400' : ' bg-gray-400')
                }
                onClick={ e => {
                    // e.preventDefault()
                    // setLastPressed('like')
                    handleLike('like');
                }}
            >
                +
            </Button>
            <span>{rating}</span>
            <Button
                className={
                    'p-0.5 px-2 border-1 rounded-3xl bg-gray-500 text-xl' +
                    ((like === 'dislike') ? ' bg-red-400' : ' bg-gray-400')
                }
                onClick={ e => {
                    // e.preventDefault();
                    // setLastPressed('dislike');
                    handleLike('dislike');
                }}
            >
                -
            </Button>
        </div>
    );
};

export default Rating;