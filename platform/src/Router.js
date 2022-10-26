import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Home/Home';
import Login from './pages/Login/Login'
import Introduce from "./pages/Introduce/Introduce";
import Result from "./pages/Result/Result";
import Navbar from "./components/Navbar/Navbar";
import KaKaoAuth from "./pages/Login/components/KakaoLogIn/KakaoAuth";

const Router = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/introduce" element={<Introduce/>}/>
                        <Route path="/result/:data" element={<Result/>}/>
                        <Route path="/oauth/kakao/callback" element={<KaKaoAuth/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;