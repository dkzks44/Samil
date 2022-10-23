import "./ModalJob.scss"

const ModalJob = ({setJobInfo, setModalJobOpen}) => {

    const onJobHandler = (e) => {
        setJobInfo(e.currentTarget.value);
    }

    const closeModalJob = () => {
        setModalJobOpen(false);
    }

    return (
        <div className="modalJob">
            <div className="questionJob">어떤 일을 하고 계신가요?</div>
            <input className="inputJob" autoFocus onChange={onJobHandler}/>
            <button onClick={closeModalJob}>작성완료</button>
        </div>
    )
}

export default ModalJob;