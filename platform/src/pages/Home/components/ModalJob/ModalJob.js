import "./ModalJob.scss"
import ModalJobData from "./ModalJobData/ModalJobData";
import { useState } from "react";

const ModalJob = ({setJobInfo, setModalJobOpen}) => {

    const onJobHandler = (e) => {
        setJobInfo(e.currentTarget.value);
    }

    const closeModalJob = () => {
        setModalJobOpen(false);
    }

    const [modalJobDataOpen, setModalJobDataOpen] = useState(false);

    return (
        <div className="modalJob">
            {modalJobDataOpen === true ? <ModalJobData/> : null}
            <div className="questionJob">어떤 일을 하고 계신가요?</div>
            <input className="inputJob" autoFocus onChange={onJobHandler} onClick={()=>{setModalJobDataOpen(true)}}/>
            <button onClick={closeModalJob}>작성완료</button>
        </div>
    )
}

export default ModalJob;