import "./ModalJob.scss"

const ModalJob = () => {
    return (
        <div className="modalJob">
            <div className="questionJob">어떤 일을 하고 계신가요?</div>
            <input className="inputJob" autoFocus/>
            <button>작성완료</button>
        </div>
    )
}

export default ModalJob;