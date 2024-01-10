import './index.css'
import {BrowserRouter, Route, Routes, Router} from "react-router-dom"
import {LoginForm} from "./components/Forms/LoginForm";
import {RegistrationForm} from "./components/Forms/RegistrationForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Pages/Feed";
import PostPage from "./components/Pages/PostPage";
import {useEffect} from "react";
import {fetchSelfAuth} from "./redux/slices/authReducer";
import {useDispatch} from "react-redux";
import CreateEditPost from "./components/Forms/CreateEditPost";
import Profile from "./components/Profile/Profile";
import User from "./components/Profile/User";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSelfAuth())
    }, []);

    return (
        <BrowserRouter>
            <div className='flex flex-col'>
                <Header/>
                <main className='bg-gray-700 h-screen'>
                    <div className='h-auto flex justify-center'>
                        <Routes>
                            <Route path={'/login'} element={<LoginForm/>}/>
                            <Route path={'/register'} element={<RegistrationForm/>}/>
                            <Route path={'/'} element={<Feed/>}/>
                            <Route path={'/posts/:id'} element={<PostPage/>}/>
                            <Route path={'/create-post'} element={<CreateEditPost/>}/>
                            <Route path={'/profile'} element={<Profile/>}/>
                            <Route path={'/users/:id'} element={<User/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
