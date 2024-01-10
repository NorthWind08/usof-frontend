import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import axios from '../../axios'
import Button from "../Buttons/Button";
import {fetchCreatePost} from "../../redux/slices/postReducer";
import {useDispatch} from 'react-redux'
import CategoryForm from "./CategoryForm";

const CreateEditPost = ({callback}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [allTags, setAllTags] = useState([]);

    useEffect(() => {
        axios.get('/categories/').then( async (data) => {
            await setAllTags(data.data.rows);
        })
    }, []);

    const submit = async (e) => {
        e.preventDefault()
        const res = {
            title: title,
            content: content,
            categories: tags
        }
        await dispatch(
            fetchCreatePost(res)
        );
        navigate('/');
    }


    return (
        <div className={'m-5 w-1/2  flex justify-center p-20 border-2 border-gray-400 bg-gray-600 rounded-md '}>
            <form
                className={'m-5 p-10 w-3/5 border-2 border-gray-400 bg-gray-500 rounded-md'}
                onSubmit={submit}
            >
                <div>
                    <span className={'text-xl'}>Ask a question</span>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div className={'flex flex-col gap-2'}>
                        <span className={'text-md font-medium'}>Title</span>
                        <input
                            className={'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded'}
                            onChange={e => setTitle(e.target.value)} value={title} type="text"
                        />
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <span className={'text-md font-medium'}>Content</span>
                        <textarea
                            onChange={e => setContent(e.target.value)} value={content}
                            className={'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded w-full pb-20'}
                        />
                    </div>
                    <div className={'flex flex-row gap-2 border-2 rounded-md border-gray-600 p-2 bg-gray-100'}>
                        <ul className={'flex flex-row wrap'}>
                            {tags?.map(tag => (
                                <li className={''}>
                                    <div
                                        className={
                                            'border border-gray-700 bg-green-200 border-green-800 rounded-md m-1 ' +
                                            'py-0.5 px-1 w-fit cursor-pointer'
                                        }
                                        title={tag.description}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setAllTags([tag, ...allTags]);
                                            setTags(tags?.filter(e => e.id !== tag.id));
                                        }}
                                    >
                                        {tag.title}
                                    </div>
                                </li>
                            ))}
                            {allTags?.map(tag => (
                                <li className={''}>
                                    <div
                                        className={
                                            'border border-gray-700 bg-blue-100 rounded-md m-1 ' +
                                            'py-0.5 px-1 w-fit cursor-pointer'
                                        }
                                        title={tag.description}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setTags([...tags, tag]);
                                            setAllTags(allTags?.filter(e => e.id !== tag.id));
                                        }}
                                    >
                                        {tag.title}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*<div className={'w-full flex flex-row'}>*/}
                    {/*    <CategoryForm/>*/}
                    {/*</div>*/}
                </div>
                <Button
                    type={'submit'}
                    className={
                        'border-2 mt-5 px-2 py-1.5 border-gray-600 text-gray-700 rounded-md bg-white text-l' +
                        ' ease-in-out duration-100 hover:bg-blue-100 hover:text-black'
                    }
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CreateEditPost;