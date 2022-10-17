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
            <div className="job">
              <div>업종</div>
              <div className="job_select">업종을 선택해 주세요.</div>
            </div>
            <div className="budget">
              <div>예산</div>
              <div className="budget_input"><input/>원</div>
            </div>
            <div className="workspace">
              <div>사업장소재지</div>
              <div className="workspace_select">사업장 위치를 입력해 주세요.</div>
            </div>
          </div>
          <button>진단받기</button>
        </div>
      </div>
    </>
  );
}

export default App;
