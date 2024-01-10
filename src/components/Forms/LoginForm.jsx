import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchAuth} from "../../redux/slices/authReducer";
import Button from "../Buttons/Button";
import {useNavigate} from "react-router";

export const LoginForm = () => {
    // const [route, setRoute] = useState('/');
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const {payload: data, error} = await dispatch(
            fetchAuth({
                email: login,
                password: password
            })
        );

        if (error) {
            console.log(error);
            return;
        }

        window.localStorage.setItem('token', data?.token);
        navigate('/');
    };

    return(
        <form
            onSubmit={(e) => handleSubmit(e, login, password)}
            className='mt-20 p-8 max-w-fit m-auto bg-gray-600 border-2 border-black rounded-xl shadow-xl text-m text-gray-900'
        >
            <div className={
                'flex flex-row justify-between justify-items-stretch items-center gap-2 mb-10 ' +
                'max-w-fit p-2 bg-gray-400 border-2 border-black rounded-md'
            }>
                <label className='base_label text-xl'>
                    <span>Login:</span>
                </label>
                <input
                    className='base_input border-2 w-fit border-gray-600 p-1 bg-gray-400 rounded'
                    type='text'
                    onChange={(e) => {
                        setLogin(e.target.value)
                    }}
                    value={login}
                    minLength={3}
                    required={true}
                />
            </div>

            <div className={
                'flex flex-row justify-between justify-items-stretch items-center gap-2 mb-10 ' +
                'max-w-fit p-2 bg-gray-400 border-2 border-black rounded-md'
            }>
                <label className='base_label text-xl'>
                    <span>Password:</span>
                </label>
                <input
                    className='base_input border-2 w-fit border-gray-600 p-1 bg-gray-400 rounded'
                    type='password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                    minLength={7}
                    required={true}
                />
            </div>

            <Button
                type={'submit'}
                className={
                    'border-2 px-4 py-2 border-black rounded-md bg-gray-400 text-xl' +
                    ' ease-in-out duration-300 hover:bg-gray-800 hover:text-white'
                }
            >
                Submit
            </Button>
        </form>
    );
}