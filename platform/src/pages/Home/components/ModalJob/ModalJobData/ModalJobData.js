import "./ModalJobData.scss"
import { useState,useEffect } from "react";

const ModalJobData = () => {

    const [jobDataList, setJobDataList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/datas/jobData.json', {
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=> {
            setJobDataList(data);
        })
        }
    )
    console.log(jobDataList);

    return (
        <div className="jobData">
           <div className="jobDataDetail">의사(전문의-가장의학과)</div>
           <div className="jobDataDetail">의사(전문의-내과)</div>
           <div className="jobDataDetail">의사(전문의-소아청소년과)</div>
           <div className="jobDataDetail">의사(전문의-신경과)</div>
           <div className="jobDataDetail">의사(전문의-정신건강의학과)</div>
           <div className="jobDataDetail">의사(전문의-재활의학과)</div>
           <div className="jobDataDetail">의사(전문의-피부과)</div>
           <div className="jobDataDetail">의사(전문의-비뇨의학과)</div>
        </div>
    )
}

export default ModalJobData;