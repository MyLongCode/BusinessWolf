import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import LoadPage from "./pages/LoadPage";
import './css/index.css';
import AuthorizationPage from "./pages/AuthorizationPage";
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<LoadPage/>}/>
                <Route path='/authorization' element={<AuthorizationPage/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
