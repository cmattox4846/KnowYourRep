import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const Logout = () => {
    this.props.logout();
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
          <Link to="/Bills" state={{ bill_id: null }}>
            Bills
          </Link>
          <Link to="/BillByDate">Bills By Date</Link>

          <Link to="/login" onClick={Logout}>
            Logout Here
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
