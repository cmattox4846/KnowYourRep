import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, { useNavigate } from "react";
import useForm from "../UseForm/UseForm";
import { Link } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import "./Profile.css";

const ProfilePage = (props) => {
//   const { formValues, handleChange, handleSubmit } = useForm(updateProfile);

//   async function updateProfile() {
//     // console.log("from login" + formValues)
//     props.loginUserCall(formValues);
//   }

//   // let navigate= useNavigate();

  return (
    <div>
      <div className="container">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="col Profiletable1">
            <table className="Profilewrapper1">
              <tbody>
                <tr>
                  <td className="Profilecell1Profile">
                    <h5>First Name:</h5>
                  </td>
                  <td className="Profilecell1Profile">
                    <h5> {props.user.first_name}</h5>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td className="Profilecell1Profile">
                    <h5>Last Name:</h5>
                  </td>
                  <td className="Profilecell1Profile">
                    <h5> {props.user.last_name}</h5>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td className="Profilecell1Profile">
                    <h5>Username:</h5>
                  </td>
                  <td className="Profilecell1Profile">
                    <h5> {props.user.username}</h5>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td className="Profilecell1Profile">
                    <h5>Email:</h5>
                  </td>
                  <td className="Profilecell1Profile">
                    <h5> {props.user.email}</h5>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td className="Profilecell1Profile">
                    <h5>State: </h5>
                  </td>
                  <td className="Profilecell1Profile">
                    <h5> {props.user.state}</h5>
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td className="Profilecell1Profile">
                    <h5>Zip Code: </h5>
                  </td>
                  <td className="Profilecell1Profile">
                    <h5> {props.user.zip_code}</h5>
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td className="Profilecell1Profile">
                    <h5>Party Affiliation: </h5>
                  </td>
                  <td className="Profilecell1Profile">
                    <h5> {props.user.party}</h5>
                  </td>
                                                  
                </tr>
                <tr>
                    <td>
                        {/* <Link to="/UserRegistration" >Update profile</Link> */}
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-3"> 
          </div>
          </div>
      <div className="container">
        <div className="col-md-12 text-center">
          <h2>{props.user.state}'s Senators Representing </h2>
        </div>

        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <div className="Profiletable2">
            <table className="Profilewrapper">
              <thead>
                <tr className="Profileheader">
                  <td className="Profilecellheader">Member ID </td>
                  <td className="Profilecellheader">First Name </td>
                  <td className="Profilecellheader">Last Name </td>
                  <td className="Profilecellheader">Party Abv.</td>
                  <td className="Profilecellheader">State </td>
                  <td className="Profilecellheader">Office Address </td>
                  <td className="Profilecellheader">Phone</td>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
                {props.senators.map((senator) => {
                  return (
                    <tr key={senator.id}>
                      <td className="Profilecell1">{senator.id}</td>
                      <td className="Profilecell1">{senator.first_name}</td>
                      <td className="Profilecell1">{senator.last_name}</td>
                      <td className="Profilecell1">{senator.party}</td>
                      <td className="Profilecell1">{senator.state}</td>
                      <td className="Profilecell1">{senator.office}</td>
                      <td className="Profilecell1">{senator.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
