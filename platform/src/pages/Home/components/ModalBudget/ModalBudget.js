import "./ModalBudget.scss"

const ModalBudget = ({setBudgetInfo, setModalBudgetOpen}) => {

    const onBudgetHandler = (e) => {
        setBudgetInfo(e.currentTarget.value);
    }

    const closeModalBudget = () => {
        setModalBudgetOpen(false);
    }

    return (
        <div className="modalBudget">
            <div className="questionBudget">얼마의 예산을 생각하고 계신가요?</div>
            <input className="inputBudget" autoFocus onChange={onBudgetHandler}/>
            <button onClick={closeModalBudget}>작성완료</button>
        </div>
    )
}

export default ModalBudget;