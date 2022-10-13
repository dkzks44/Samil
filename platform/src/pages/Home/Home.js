import React from "react";
import "./Home.scss"

function App() {
  return (
    <>
    <div className="wrap">
        <div className="navbar">
          <div className="logo">A-Z incubating</div>
          <button>로그인</button>
        </div>
        <div className="main_page">
          <span>전문가를 전문가답게 : A-Z 인큐베이팅</span>
          <div className="info_box">
            <div>업종</div>
            <div>예산<input/></div>
            <div>사업장소재지</div>
          </div>
          <button>진단받기</button>
        </div>
      </div>
    </>
  );
}

export default App;
