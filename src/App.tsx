import React, {useContext, useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import AuthorizationPage from "./pages/authPage/AuthorizationPage";
import {AnimatePresence} from "framer-motion";
import MainPage from "./pages/mainPage/MainPage";
import MainHeader from "./components/mainHeader/MainHeader";
import './index.css';
import ProfilePage from "./pages/profilePage/ProfilePage";
import {Context} from "./index";
import {observer} from "mobx-react-lite";


function App() {
    const location = useLocation()
    const {store} = useContext(Context)
    const pagesWithMainHeader = [
        '/main',
        '/profile',
    ]

    useEffect(() => {
        store.checkAuth()
    });

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

export default observer(App);
