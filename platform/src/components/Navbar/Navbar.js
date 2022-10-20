import "./Navbar.scss"
import { useNavigate } from 'react-router';

const Navbar = () => {
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
          <div className="menu">
            <div onClick={moveToIntroduce}>서비스소개</div>
            <button onClick={moveToLogIn}>로그인</button>
          </div>
        </div>
    )
}

export default Navbar;