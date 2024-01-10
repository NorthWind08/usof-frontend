import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Button from "../Buttons/Button";
import {fetchAuthMe} from "../../redux/slices/authReducer";


const Profile = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.data);

    const [login, setLogin] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    useEffect(() => {
        setLogin(user?.login);
        setFname(user?.fname);
        setLname(user?.lname);
    }, [user]);

    const [editActive, setEditActive] = useState(false)

    const handleEditSubmit = async (e) => {
        setEditActive(!editActive);
        await dispatch(
            fetchAuthMe({
                login: login,
                fname: fname,
                lname: lname
            })
        )
    }


    return (
        <div className={'flex flex-col gap-8 w-2/5 mt-16 p-4 border-2 rounded-md border-gray-400 ' +
            'bg-gray-600'
        }>
            <div className={'flex flex-row gap-4 '}>
                <div
                    className={'w-32 h-32 bg-red-500'}
                >
                    This will be avatar
                </div>
                <div className={'flex flex-col'}>
                    <div className={'mb-auto flex flex-col'}>
                        <span className={'text-3xl'}>
                            {`${user?.fname} ${user?.lname}`}
                        </span>
                        <span className={'text-md font-medium text-gray-900'}
                        >
                            {`@${user?.login}`}
                        </span>
                    </div>
                    <span className={'text-3xl mt-auto'}>
                        {`Rating: ${user?.rating}`}
                    </span>
                </div>
                <div className={'flex flex-col ml-auto'}>
                    <Button className={
                        'border-2 px-2 py-1.5 border-gray-600 text-gray-700 rounded-md bg-white text-l' +
                        ' ease-in-out duration-100 hover:bg-blue-100 hover:text-black'
                    }>
                        Reset password
                    </Button>
                    <Button
                        className={
                            'border-2 px-2 py-1.5 border-gray-600 text-gray-700 rounded-md bg-white text-l' +
                            ' ease-in-out duration-100 hover:bg-blue-100 hover:text-black'
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setEditActive(!editActive);
                        }}
                    >
                        {editActive ? 'Cancel' : 'Edit'}
                    </Button>
                </div>
            </div>
            <div className={'border-t-2 border-gray-400 pt-4'}>
                <form onSubmit={handleEditSubmit}>
                    <div className={'flex flex-row justify-around'}>
                        <div className={'flex flex-col gap-2'}>
                            <span
                                className={'text-xl'}
                            >
                                First name
                            </span>
                            <input
                                readOnly={!editActive}
                                value={fname}
                                className={
                                    'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded'
                                }
                                type="text"
                                onChange={e => {
                                    setFname(e.target.value)
                                }}
                            />
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <span
                                className={'text-xl'}
                            >
                                Last name
                            </span>
                            <input
                                readOnly={!editActive}
                                value={lname}
                                className={
                                    'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded'
                                }
                                type="text"
                                onChange={e => {
                                    setLname(e.target.value)
                                }}
                            />
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <span
                                className={'text-xl'}
                            >
                                Login
                            </span>
                            <input
                                readOnly={!editActive}
                                value={login}
                                className={
                                    'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded'
                                }
                                type="text"
                                onChange={e => {
                                    setLogin(e.target.value)
                                }}
                            />
                        </div>
                        {editActive && (
                            <Button
                                className={
                                    'border-2 px-2 py-1.5 border-gray-600 text-gray-700 rounded-md bg-white text-l' +
                                    ' ease-in-out duration-100 hover:bg-blue-100 hover:text-black'
                                }
                                type={'submit'}
                            >
                                Submit
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;