import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
 
  const logOut = ()=>{
    localStorage.removeItem("token");
    console.log("logged user out")
    window.location="/";
    props.setlogoutStatus(true)
    }
 
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <div>
        <nav className="topNav">
          <Link to="/">Home</Link>

          <Link to="/login">Login Here</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/UserRegistration">Registration</Link>
          {/* <Link to="/Senators" >Senators</Link> */}
          {/* <Link to="/VotingPosition" >Voting Position</Link> */}
          <Link to="/SenatorsByState">SenatorsByState</Link>
          {/* <Link to="/BarChart" >Graphs</Link> */}
          <Link to="/Bills" state={{ bill_id: undefined }}>
            Bills
          </Link>
          <Link to="/BillByDate">Bills By Date</Link>

          <Link to="/"  onClick={() => handleLogOut()} >
            Logout Here
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
