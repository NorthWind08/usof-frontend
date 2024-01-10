import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPost, fetchComments} from "../../redux/slices/postReducer";
import {useParams} from "react-router-dom";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";
import CommentForm from "../Forms/CommentForm";
import Response from "../Comment/Response";


const PostPage = () => {
    const {id} = useParams();
    const {post, comments} = useSelector(state => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost({id: id}));
        dispatch(fetchComments({id: id}));
    }, []);
    return (
        <div className={'pl-4 bg-gray-100 w-3/5'}>
            {
                (post?.data?.post) ?
                (
                    <>
                        <Post data={post.data.post} count={comments?.comments?.length}></Post>
                        <CommentForm postID={id}/>
                        {comments?.comments?.map(comment => {
                            return(
                                <Comment data={comment}/>
                                // <Response commentData={comment}/>
                            )
                        })}
                    </>
                ) : (
                    <span>Such post does not exist</span>
                )
            }
        </div>
    );
};

export default PostPage;