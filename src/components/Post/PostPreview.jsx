import {Link} from "react-router-dom";
import React from "react";
import {useNavigate} from "react-router";
// import {AuthorBox} from "../AuthorBox/AuthorBox";

export const PostPreview = ({post}) => {
    const navigate = useNavigate();

    return (
        <div
            className={
                'bg-gray-300 p-4 border-4 rounded-md border-gray-500 hover:border-blue-300 hover:'
            }
            onClick={e => {
                navigate(`/posts/${post.id}`);
            }}
        >
            <div className={'flex flex-col p-2 pl-4'}>
                <div className={' flex flex-col pb-2 border-b border-b-black'}>
                    <span className={'text-2xl'}>
                        {post.title}
                    </span>
                    <div className={'flex flex-row gap-6 pt-2'}>
                        <span>{`Asked ${post.createdAt.slice(0,10)}`}</span>
                        <span>{`Modified ${post.createdAt.slice(0,10)}`}</span>
                    </div>
                </div>
                <br/>
                <div className={'pl-4'}>
                    <span>{post.content}</span>
                </div>
                <br/>
                <div className={'flex flex-row gap-6'}>
                    {post.postCategories.map(e => {
                        return (
                            <a
                                // href={'/'}
                                className={'rounded-md py-1 px-2 bg-gray-200 text-m text-gray-800 weight-'}
                            >
                                {e.title}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}