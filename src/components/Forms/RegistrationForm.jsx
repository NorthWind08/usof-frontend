import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchRegister} from "../../redux/slices/authReducer";
import Button from "../Buttons/Button";
import {useNavigate} from "react-router";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const inputDiv = (
        'flex flex-row justify-between items-center gap-4 py-2 px-4 m-2 border-gray-700 border-2 rounded-md ' +
        'bg-gray-200'
    );
    const input = (
        'base_input border-2 w-fit border-gray-600 p-1 bg-gray-100 rounded'
    );
    const handleSubmit = async (e) => {
        e.preventDefault();

        const {payload: data, error} = await dispatch(
            fetchRegister({
                email: email,
                password: password,
                login: login,
                fname: fname,
                lname: lname
            })
        );

        if (error) {
            console.log(error);
            return;
        }

        navigate('/');
    };

    return(
        <form
            onSubmit={(e) => handleSubmit(e, login, password)}
            className='mt-20 p-8 max-w-fit m-auto bg-gray-400 border-2 border-black rounded-xl shadow-xl text-m text-gray-900'
        >

            <div className={
                inputDiv
            }>
                <label className='base_label text-xl'>
                    <span>Login:</span>
                </label>
                <input
                    className={input}
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
                inputDiv
            }>
                <label className='base_label text-xl'>
                    <span>First name:</span>
                </label>
                <input
                    className={input}
                    type='text'
                    onChange={(e) => {
                        setFname(e.target.value)
                    }}
                    value={fname}
                    required={true}
                />
            </div>

            <div className={
                inputDiv
            }>
                <label className='base_label text-xl'>
                    <span>Last name:</span>
                </label>
                <input
                    className={input}
                    type='text'
                    onChange={(e) => {
                        setLname(e.target.value)
                    }}
                    value={lname}
                    required={true}
                />
            </div>

            <div className={
                inputDiv
            }>
                <label className='base_label text-xl'>
                    <span>Email:</span>
                </label>
                <input
                    className={input}
                    type='text'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                    minLength={3}
                    required={true}
                />
            </div>

            <div className={
                inputDiv
            }>
                <label className='base_label text-xl'>
                    <span>Password:</span>
                </label>
                <input
                    className={input}
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
                    'border-2 px-2 py-1.5 border-gray-600 text-gray-700 rounded-md bg-white text-l ' +
                    'ease-in-out duration-100 hover:bg-blue-100 hover:text-black m-2'
                }
            >
                Submit
            </Button>
        </form>
    );
}