import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Home/Home';
import Login from './pages/Login/Login'
import Introduce from "./pages/Introduce/Introduce";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/introduce" element={<Introduce/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;