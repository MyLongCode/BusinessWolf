import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import StartPage from "./pages/StartPage";
import './css/index.css';
import AuthorizationPage from "./pages/AuthorizationPage";
import {AnimatePresence} from "framer-motion";
import MainPage from "./pages/MainPage";

function App() {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<StartPage/>}/>
                <Route path='/authorization' element={<AuthorizationPage/>}/>
                <Route path='/main' element={<MainPage/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
