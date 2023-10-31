import React, {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import AuthorizationPage from "./pages/authPage/AuthorizationPage";
import {AnimatePresence} from "framer-motion";
import MainPage from "./pages/mainPage/MainPage";
import MainHeader from "./components/mainHeader/MainHeader";
import './index.css';
import ProfilePage from "./pages/profilePage/ProfilePage";
import {useActions} from "./hooks/useActions";


function App() {
    const location = useLocation()
    const navigate = useNavigate()
    const {checkAuth} = useActions()

    useEffect(() => {
        if(location.pathname !== '/authorization') {
            checkAuth()
        }
    }, []);

    useEffect(() => {
        if(!localStorage.getItem('refresh_token')) {
            navigate('/authorization');
        }
    }, [navigate]);

    const pagesWithMainHeader = [
        '/main',
        '/profile',
    ]

    return (
        <>
            {pagesWithMainHeader.includes(location.pathname) && <MainHeader/>}
            <main>
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<StartPage/>}/>
                        <Route path='/authorization' element={<AuthorizationPage/>}/>
                        <Route path='/main' element={<MainPage/>}/>
                        <Route path='/profile' element={<ProfilePage/>}/>
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
}

export default App;
