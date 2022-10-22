import "./ModalSignUp.scss"
import {useState} from "react";

const ModalSignUp = ({setModalSignUpOpen}) => {
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }

        let body = {
            email: Email,
            name: Name,
            password: Password,
            confirmPassword: ConfirmPassword,
        }

        console.log(body)

        // dispatch(registerUser(body))
        // .then(response => {
        //     if(response.payload.success){
        //         props.history.push('/loginPage')
        //     } else {
        //         alert('Error')
        //     }
        // })
    }


    return (
        <div className="modalSignUp">
            <form onSubmit={onSubmitHandler}>
                회원가입하세요!
                <div>아이디,이메일</div>
                <input type='email' onChange={onEmailHandler}/>
                <div>이름</div>
                <input type='name' onChange={onNameHandler}/>
                <div>비밀번호</div>
                <input type='password' onChange={onPasswordHandler}/>
                <div>비밀번호확인</div>
                <input type='password' onChange={onConfirmPasswordHandler}/>
                <button type="button" onClick={()=>setModalSignUpOpen(false)}>회원가입</button>
            </form>
        </div>
    )
}

export default ModalSignUp;