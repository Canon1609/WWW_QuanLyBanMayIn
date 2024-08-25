import svg from "../../assets/images/404-DUm08_0T.svg"
import {Button} from "antd"
import "./404.scss"
import { Link } from "react-router-dom";
function Page404(){
    return(
        <>
        <div className = "pnf">
            <img src={svg} alt="page_not_found" className = "pnf__image"></img>
            <h3 className = "pnf__title">Page is not found!</h3>
            <Link to={"/dashboard"}>
                <Button className="pnf__btn">Back to Home</Button>
            </Link>
          
        </div>
            
        </>
    )
}
export default Page404;