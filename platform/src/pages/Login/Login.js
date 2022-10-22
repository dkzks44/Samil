import "./Login.scss"
import {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import ModalSignUp from "./components/ModalSignUp/ModalSignUp";

const Login = () => {
    const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
    return (
        <>
            <Navbar/>
            {modalSignUpOpen === true ? <ModalSignUp setModalSignUpOpen={setModalSignUpOpen} /> : null}
            <div className="wrapLogIn">
                <div className="logInTitle">로그인</div>
                <input className="idInput" placeholder="아이디를 입력해주세요."/>
                <input type="password" className="pwInput" placeholder="비밀번호를 입력해주세요."/>
                <div className="socialLogIn">social login(google, kakao, naver)</div>
                <div className="goSignUp">아직 <span className="signUp" onClick={()=>{setModalSignUpOpen(true)}}>회원</span>이 아니신가요?</div>
                <div className="findIdPw"><a href="/">ID/PW</a>를 잊어버리셨나요?</div>
                <button className="logInBtn">로그인</button>
            </div>
        </>
    )
}

export default Login;