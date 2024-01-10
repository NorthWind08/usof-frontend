import React, {useState} from 'react';
import Button from "../Buttons/Button";
import {useNavigate} from "react-router";
import CheckAuth from "../Utility/CheckAuth";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/slices/authReducer";

const Header = () => {
    const navigate = useNavigate();
    const [name, switchName] = useState(true);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-row gap-4 p-6 bg-gray-400 justify-between'>
            <span
                className='bold text-2xl font-bold ease-linear duration-300 cursor-pointer'
                onClick={() => {
                    // switchName(!name);
                    navigate('/')
                }}
            >
                {name ? 'SegFault' : 'Segmentation fault (core dumped)'}
            </span>

            <div>
                <form className={'flex flex-row gap-2'}>
                    <input
                        className={
                            'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded' +
                            ' focus:bg-blue-100 pr-20'
                        }
                        type="text"
                    />
                    <Button
                        type={'submit'}
                        className={
                            'border-2 px-2 py-1.5 border-gray-600 text-gray-700 rounded-md bg-white text-l' +
                            ' ease-in-out duration-100 hover:bg-blue-100 hover:text-black'
                        }
                    >
                        Search
                    </Button>
                </form>
            </div>

            <CheckAuth inverted={true}>
                <div className={'flex gap-4'}>
                    <Button className={
                        'border-2 px-4 py-2 border-black rounded-md bg-white text-xl' +
                        ' ease-in-out duration-100 hover:bg-gray-800 hover:text-white'
                    } onClick={() => {
                        navigate('/login')
                    }}
                    >
                        Login
                    </Button>

                    <Button className={
                        'border-2 px-4 py-2 border-black rounded-md bg-white text-xl' +
                        ' ease-in-out duration-100 hover:bg-gray-800 hover:text-white'
                    } onClick={() => {
                        navigate('/register')
                    }}
                    >
                        Sign up
                    </Button>
                </div>
            </CheckAuth>
            <CheckAuth>
                <div className={'flex gap-4'}>
                    <Button className={
                        'border-2 px-4 py-2 border-black rounded-md bg-white text-xl' +
                        ' ease-in-out duration-100 hover:bg-gray-800 hover:text-white'
                    } onClick={() => {
                        navigate('/profile')
                    }}
                    >
                        Profile
                    </Button>

                    <Button className={
                        'border-2 px-4 py-2 border-black rounded-md bg-white text-xl' +
                        ' ease-in-out duration-100 hover:bg-gray-800 hover:text-white'
                    } onClick={() => {
                        window.localStorage.clear();
                        dispatch(logout());
                    }}
                    >
                        Log out
                    </Button>
                </div>
            </CheckAuth>
        </div>
    );
};

export default Header;