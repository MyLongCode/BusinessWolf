import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import StartPage from "./pages/startPage/StartPage";
import AuthorizationPage from "./pages/authPage/AuthorizationPage";
import {AnimatePresence} from "framer-motion";
import MainPage from "./pages/mainPage/MainPage";
import MainHeader from "./components/mainHeader/MainHeader";
import './index.css';


function App() {
    const location = useLocation()
    const pagesWithMainHeader = [
        '/main',
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
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
}

export default App;
