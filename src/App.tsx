import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import AuthorizationPage from "./pages/authPage/AuthorizationPage";
import {AnimatePresence} from "framer-motion";
import MainPage from "./pages/mainPage/MainPage";
import MainHeader from "./components/mainHeader/MainHeader";
import './index.css';
import ProfilePage from "./pages/profilePage/ProfilePage";


function App() {
    const location = useLocation()
    const [lastURL, setLastURL] = useState('')
    const pagesWithMainHeader = [
        '/main',
        '/profile',
    ]

    useEffect(() => {
        if (location.pathname !== '/profile') {
            setLastURL(location.pathname)
        }
    }, [location]);

    return (
        <>
            {pagesWithMainHeader.includes(location.pathname) && <MainHeader/>}
            <main>
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<StartPage/>}/>
                        <Route path='/authorization' element={<AuthorizationPage/>}/>
                        <Route path='/main' element={<MainPage/>}/>
                        <Route path='/profile' element={<ProfilePage lastAddress={lastURL}/>}/>
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
}

export default App;
