import React, {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import AuthorizationPage from "./pages/authPage/AuthorizationPage";
import {AnimatePresence} from "framer-motion";
import MainPage from "./pages/mainPage/MainPage";
import './index.css';
import ProfilePage from "./pages/profilePage/ProfilePage";
import {useActions} from "./hooks/useActions";
import {useTypedSelector} from "./hooks/useTypedSelector";
import CoursePage from "./pages/coursePage/coursePage";
import ModulePage from "./pages/modulePage/ModulePage";
import TestPage from "./pages/testPage/TestPage";
import TestResultPage from "./pages/testResultPage/TestResultPage";
import LessonPage from "./pages/lessonPage/LessonPage";


function App() {
    const location = useLocation()
    const navigate = useNavigate()
    const {checkAuth, logout} = useActions()
    const {error} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (location.pathname !== '/authorization' && location.pathname !== '/') {
            checkAuth()
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if ((error || !localStorage.getItem('refresh_token')) &&
            location.pathname !== '/authorization' && location.pathname !== '/') {
            navigate('/authorization', {
                state: {from: location}
            })
            logout()
        }
        // eslint-disable-next-line
    }, [error, navigate,]);

    return (
        <>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<StartPage/>}/>
                    <Route path='/authorization' element={<AuthorizationPage/>}/>
                    <Route index path='/main' element={<MainPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/course'>
                        <Route path=':id' element={<CoursePage/>}/>
                        <Route path=':courseID/module'>
                            <Route path=':id/*' element={<ModulePage/>}/>
                            <Route path=':moduleID/lessons/:id' element={<LessonPage/>}/>
                            <Route path=':moduleID/tests/:id' element={<TestPage/>}/>
                            <Route path=':moduleID/tests/:id/result' element={<TestResultPage/>}/>
                        </Route>
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
