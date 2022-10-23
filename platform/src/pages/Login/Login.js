import "./Login.scss"
import {useState} from "react";
import { useNavigate } from 'react-router';
import Navbar from "../../components/Navbar/Navbar";
import ModalSignUp from "./components/ModalSignUp/ModalSignUp";

const Login = () => {
    const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
    const [testLogIn, setTestLogIn] = useState(false)
    let navigate = useNavigate();

    const testOnClickLogIn = () => {
        setTestLogIn(true);
        if(testLogIn === true) {
            navigate('/')
        }
    }

    const REST_API_KEY = "91c5c80785e99f0e051063693df83082";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <>
            <Navbar testLogIn={testLogIn}/>
            {modalSignUpOpen === true ? <ModalSignUp setModalSignUpOpen={setModalSignUpOpen} /> : null}
            <div className="wrapLogIn">
                <div className="logInTitle">로그인</div>
                <input className="idInput" placeholder="아이디를 입력해주세요."/>
                <input type="password" className="pwInput" placeholder="비밀번호를 입력해주세요."/>
                <div className="socialLogIn"><a href={KAKAO_AUTH_URL}><img className="kakaoLogIn" alt="kakao" src="images/kakao_login_large_wide.png"></img></a>social login(google, kakao, naver)</div>
                <div className="goSignUp">아직 <span className="signUp" onClick={()=>{setModalSignUpOpen(true)}}>회원</span>이 아니신가요?</div>
                <div className="findIdPw"><a href="/">ID/PW</a>를 잊어버리셨나요?</div>
                <button className="logInBtn" onClick={testOnClickLogIn}>로그인</button>
            </div>
        </>
    )
}

export default Login;