import React, {useEffect, useState} from 'react';
import Button from "../Buttons/Button";
import axios from "../../axios";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchUser} from "../../redux/slices/usersReducer";
import Rating from "../Rating/Rating";

const Post = ({data, count}) => {
    const user = data.user;



    const [like, setLike] = useState('');

    const handlePost = () => {
        return async () => {
            await axios.delete(`/posts/${data.id}/like`, {
                type: like,
                entityType: 'post'
            });
            await axios.post(`/posts/${data.id}/like`, {
                type: like,
                entityType: 'post'
            });
        }
    }


    const handleLike = (lastPressed) => {
        if (lastPressed === like) {
            return;
        }
        setLike(lastPressed);
    }

    useEffect(() => {
        console.log(like)
        // handlePost()();
    }, [like]);


    return (
        <div className={'flex flex-row w-3/5'}>
            <Rating entityType={'post'} entityID={data.id} initialRating={data.rating}/>
            <div className={'bg-gray-100 pl-4 w-auto'}>
                <div className={'flex flex-col p-2 pl-4'}>
                    <div className={' flex flex-col pb-2 border-b border-b-black'}>
                        <span className={'text-2xl'}>
                            {data.title}
                        </span>
                        <div className={'flex flex-row gap-6 pt-2'}>
                            <span>{`Asked ${data.createdAt.slice(0,10)}`}</span>
                            <span>{`Modified ${data.createdAt.slice(0,10)}`}</span>
                        </div>
                    </div>
                    <br/>
                    <div className={'pl-4'}>
                        <span>{data.content}</span>
                    </div>
                    <br/>
                    <div className={'flex flex-row gap-6'}>
                        {data.postCategories.map(e => {
                            return (
                                <a
                                    href={'/'}
                                    className={'rounded-md py-1 px-2 bg-gray-200 text-m text-gray-800 weight-'}
                                >
                                    {e.title}
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className={'pl-4 text-xl'}>
                    <span>{`${count} Answers`}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;