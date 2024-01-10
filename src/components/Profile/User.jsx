import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../redux/slices/usersReducer";
import {useNavigate} from "react-router";


const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();
    const me = useSelector(state => state.auth.data);
    const user = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUser({id: id}));
    }, []);

    console.log(user);

    if (user?.id === Number(me?.id)) {
        navigate('/profile');
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
                        <span className={'text-md text-gray-900'}
                        >
                            {`@${user?.login}`}
                        </span>
                    </div>
                    <span className={'text-3xl mt-auto'}>
                        {`Rating: ${user?.rating}`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default User;