import "./Navbar.scss"
import { useNavigate } from 'react-router';

const Navbar = () => {
  let navigate = useNavigate();
  const moveToLogIn = () => {
    navigate('/login');
  }

    return (
        <div className="navbar">
          <div className="logo">A-Z incubating</div>
          <div className="menu">
            <div>서비스소개</div>
            <button onClick={moveToLogIn}>로그인</button>
          </div>
        </div>
    )
}

export default Navbar;