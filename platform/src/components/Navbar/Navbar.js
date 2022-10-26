import "./Navbar.scss"
import { useNavigate } from 'react-router';

const Navbar = ({testLogIn}) => {
  let navigate = useNavigate();
  const moveToHome = () => {
    navigate('/')
  }

  const moveToLogIn = () => {
    navigate('/login');
  }
  const moveToIntroduce = () => {
    navigate('/introduce')
  }

    return (
        <div className="navbar">
          <div className="logo" onClick={moveToHome}>A-Z incubating</div>
          {testLogIn ?
          <div className="menu">
            <div onClick={moveToIntroduce}>서비스소개</div>
            <div>마이페이지</div>
            <button onClick={moveToLogIn}>로그아웃</button>
          </div> :
        <div className="menu">
            <div onClick={moveToIntroduce}>서비스소개</div>
            <div onClick={moveToLogIn}>로그인</div>
          </div>}
        </div>
    )
}

export default Navbar;