import "./ModalOffice.scss"
import {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';

const ModalOffice = ({setOfficeInfo,setModalOfficeOpen}) => {

    const [visible, setVisible] = useState(false);
    const [officeResult,setOfficeResult] = useState([]);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setOfficeResult(fullAddress)
        setOfficeInfo(fullAddress)
      }

    return (
        <div className="modalOffice">
            <div className="questionOffice">어디서 일을 하고 계신가요?</div>
            <input className="inputOffice" autoFocus onClick={()=>setVisible(true)} defaultValue={officeResult} readOnly/>
            {visible ? <DaumPostcode onComplete={handleComplete}/> : null}
            <button onClick={()=>setModalOfficeOpen(false)}>작성완료</button>
        </div>
    )
}

export default ModalOffice;