import './index.css'
import {BrowserRouter, Route, Routes, Router} from "react-router-dom"
import {LoginForm} from "./components/Forms/LoginForm";
import {RegistrationForm} from "./components/Forms/RegistrationForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Pages/Feed";
import PostPage from "./components/Pages/PostPage";

const App = () => {
    const id = 1;

    return (
        <BrowserRouter>
            <div className='flex flex-col'>
                <Header/>
                <main className='bg-gray-700 h-screen'>
                    <div className='h-auto'>
                        <Routes>
                            <Route path={'/login'} element={<LoginForm/>}/>
                            <Route path={'/register'} element={<RegistrationForm/>}/>
                            <Route path={'/'} element={<Feed/>}/>
                            <Route path={'/posts/:id'} element={<PostPage/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
