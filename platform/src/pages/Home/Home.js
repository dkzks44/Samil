import React, {useState} from "react";
import { useNavigate } from 'react-router';
import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import ModalJob from "./components/ModalJob/ModalJob";
import ModalBudget from "./components/ModalBudget/ModalBudget";
import ModalOffice from "./components/ModalOffice/ModalOffice";

function App() {
  const [modalJobOpen, setModalJobOpen] = useState(false);
  const [modalBudgetOpen, setModalBudgetOpen] = useState(false);
  const [modalOfficeOpen, setModalOfficeOpen] = useState(false);
  const [jobInfo, setJobInfo] = useState('');
  const [budgetInfo, setBudgetInfo] = useState('');
  const [officeInfo, setOfficeInfo] = useState([]);

  let navigate = useNavigate();
  const moveToResult = () => {
    navigate(`/result/${jobInfo}&${budgetInfo}&${officeInfo}`)
  }
  return (
    <>
    <Navbar/>
    {modalJobOpen === true ? <ModalJob setJobInfo={setJobInfo} setModalJobOpen={setModalJobOpen} /> : null}
    {modalBudgetOpen === true ? <ModalBudget setBudgetInfo={setBudgetInfo} setModalBudgetOpen={setModalBudgetOpen}/> : null}
    {modalOfficeOpen === true ? <ModalOffice officeInfo={officeInfo} setOfficeInfo={setOfficeInfo} setModalOfficeOpen={setModalOfficeOpen}/> : null}
    <div className="wrap">
        <div className="main_page">
          <span>전문가를 전문가답게 : A-Z 인큐베이팅</span>
          <div className="info_box">
            <div className="job">
              <div>업종</div>
              <div className="job_select" onClick={()=>{setModalJobOpen(true)}}>{jobInfo==='' ? "업종을 선택해 주세요." : jobInfo}</div>
            </div>
            <div className="budget">
              <div>예산</div>
              <div className="budget_input"><input onClick={()=>{setModalBudgetOpen(true)}} defaultValue={budgetInfo==='' ? '' : budgetInfo}/>원</div>
            </div>
            <div className="workspace">
              <div>사업장소재지</div>
              <div className="workspace_select" onClick={()=>{setModalOfficeOpen(true)}}>{officeInfo.length===0 ? "사업장 소재지를 선택해주세요" : officeInfo}</div>
            </div>
          </div>
          <button onClick={moveToResult}>진단받기</button>
        </div>
      </div>
    </>
  );
}

export default App;
