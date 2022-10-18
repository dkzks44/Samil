import React, {useState} from "react";
import "./Home.scss"
import ModalJob from "./components/ModalJob";
import Navbar from "../../components/Navbar/Navbar";

function App() {
  const [modalJobOpen, setModalJobOpen] = useState(false);

  return (
    <>
    <div className="wrap">
        <Navbar/>
        <div className="main_page">
          <span>전문가를 전문가답게 : A-Z 인큐베이팅</span>
          <div className="info_box">
            <div className="job">
              <div>업종</div>
              <div className="job_select" onClick={()=>{setModalJobOpen(true)}}>업종을 선택해 주세요.</div>
              {modalJobOpen === true ? <ModalJob /> : null}
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
