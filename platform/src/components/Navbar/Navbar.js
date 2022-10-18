import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
          <div className="logo">A-Z incubating</div>
          <div className="menu">
            <div>서비스소개</div>
            <button>로그인</button>
          </div>
        </div>
    )
}

export default Navbar;