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
import {useTypedSelector} from "./hooks/useTypedSelector";
import CoursePage from "./pages/coursePage/coursePage";


function App() {
    const location = useLocation()
    const navigate = useNavigate()
    const {checkAuth, logout} = useActions()
    const {error} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (location.pathname !== '/authorization') {
            checkAuth()
        }
    }, []);

    useEffect(() => {
        if (error) {
            navigate('/authorization')
            logout()
        }
    }, [error]);

    useEffect(() => {
        if (!localStorage.getItem('refresh_token')) {
            navigate('/authorization');
        }
    }, [navigate]);

    const pagesWithMainHeader = [
        '/main',
        '/profile',
        '/course'
    ]

    return (
        <>
            {(pagesWithMainHeader.includes(location.pathname) || pagesWithMainHeader.includes(
                    location.pathname.slice(0, location.pathname.lastIndexOf('/'))
                )) && <MainHeader/>}
            <main>
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<StartPage/>}/>
                        <Route path='/authorization' element={<AuthorizationPage/>}/>
                        <Route path='/main' element={<MainPage/>}/>
                        <Route path='/profile' element={<ProfilePage/>}/>
                        <Route path='/course/:id' element={<CoursePage/>}/>
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
}

export default App;
