import React, {useState} from 'react';
import Button from "../Buttons/Button";

const CategoryForm = () => {
    const [formActive, setFormActive] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={'flex w-full'}>
            {formActive && (
                <div className={''}>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className={'flex flex-row gap-2'}>
                            <span>Title</span>
                            <input className={'border border-gray-700 bg-green-200 border-green-800 rounded-md m-1 ' +
                                            'py-0.5 px-1 w-auto cursor-pointer ml-auto'} type="text"/>
                        </div>
                        <div className={'flex flex-row gap-2'}>
                            <span>Description</span>
                            <input className={'border border-gray-700 bg-green-200 border-green-800 rounded-md m-1 ' +
                                            'py-0.5 px-1 w-auto cursor-pointer ml-auto'} type="text"/>
                        </div>

                    </form>
                </div>
            )}
            <Button
                className={
                    'border border-gray-700 bg-blue-100 rounded-md m-1 text-gray-600 ' +
                    'py-1 px-1.5 cursor-pointer ml-auto ' +
                    'hover:bg-blue-200 hover:text-black hover:border-blue-900'
                }
                onClick={(e) => {
                    e.preventDefault();
                    setFormActive(!formActive);
                }}
            >
                New
            </Button>
        </div>

    );
};


export default CategoryForm;