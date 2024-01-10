import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../redux/slices/usersReducer";
import Button from "../Buttons/Button";
import {useNavigate} from "react-router";
import Rating from "../Rating/Rating";

const Comment = ({data}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.users);
    useEffect(() => {
        dispatch(fetchUser({id: data.author}))
    }, []);

    console.log(user);
    return (
        <div className={'flex flex-row w-3/5 mt-8'}>
            <Rating entityType={'comment'} entityID={data.id} initialRating={data.rating}/>
            <div className={'bg-gray-100 pl-4 w-auto'}>
                <div className={'flex flex-col p-2 pl-4'}>
                    {/*<div className={' flex flex-col pb-2 border-b border-b-black'}>*/}
                    {/*    <div className={'flex flex-row gap-6 pt-2'}>*/}
                    {/*        <span>{`Asked ${data.createdAt.slice(0,10)}`}</span>*/}
                    {/*        <span>{`Modified ${data.createdAt.slice(0,10)}`}</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<br/>*/}
                    <div>
                        {
                            user.login &&
                            <span>{user?.login}</span>
                        }

                    </div>
                    <div className={'pl-4'}>
                        <span>{data.content}</span>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default Comment;