import './HomePage.css'
import logo from "../../Images/logo.png"

const HomePage=()=>{
    return(
        <div className="contatiner">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 img"><img src={logo} width="760px" heigth="760px" alt="logo"/></div>
                <div className="col-md-2"></div>
            </div>
        </div>

    )
}
export default HomePage