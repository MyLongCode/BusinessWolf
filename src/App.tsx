import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoadPage from "./pages/LoadPage";
import './css/index.css';
import AuthorizationPage from "./pages/AuthorizationPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<LoadPage/>}/>
            <Route path='/authorization' element={<AuthorizationPage/>}/>
        </Routes>
    );
}

export default App;
