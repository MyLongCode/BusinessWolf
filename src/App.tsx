import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoadPage from "./pages/LoadPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<LoadPage/>}/>
        </Routes>
    );
}

export default App;
