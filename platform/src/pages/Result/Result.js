import "./Result.scss"
import { useParams } from "react-router";


const Result = () => {

    let {data} = useParams();

    return(
        <>
            <div>Here is result</div>
            <div>{data}</div>
        </>
    );
}

export default Result;