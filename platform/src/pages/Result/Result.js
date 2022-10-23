import "./Result.scss"
import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";


const Result = () => {

    let {data} = useParams();

    return(
        <>
            <Navbar/>
            <div>Here is result</div>
            <div>{data}</div>
        </>
    );
}

export default Result;