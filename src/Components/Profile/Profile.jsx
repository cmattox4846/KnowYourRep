import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, { useNavigate} from 'react';
import "./Profile.css"

const ProfilePage = (props) => {
   
    // let navigate= useNavigate();

//   async function editForm() {
//     navigate("/updateProfileForm");
//   }

    return (  
       
            <div className="Profile_Table">
                
                    <div className="table">
                        <table className="wrapper1">
                            <tbody>
                                <tr>
                                    <td>First Name: {props.user.first_name}</td></tr>
                                    <tr>  <td>Last Name: {props.user.last_name}</td></tr>
                                    <tr>   <td>Username: {props.user.username}</td></tr>
                                    <tr>  <td>Email: {props.user.email}</td></tr>
                                    <tr> <td>State: {props.user.state}</td> </tr>
                                    <tr> <td>Zip Code: {props.user.zip_code}</td> </tr>
                                    <tr> <td>Party Affiliation: {props.user.party}</td> 
                                    
                                    {/* <td><Button variant="primary" onClick={() => editForm()}>Update Profile</Button></td>                                    */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="table">
                   
                    <div className="col-10 text-center"><h2>{props.user.state}'s Senators Representing </h2></div>
                   
        
        <table className="wrapper">
    
          <thead>
            <tr className="header">
                
                                        <td className="cell">Member ID </td>
                                        <td className="cell">First Name </td>
                                        <td className="cell">Last Name </td>
                                        <td className="cell">Party Abv.</td>
                                        <td className="cell">State </td>
                                        <td className="cell">Office Address </td>
                                        <td className="cell">Phone</td>
    
                                    </tr>
                                </thead>
                                <tbody><tr>
                                </tr>
                                {props.senators.map((senator) => {
                                 return(
                                    <tr key={senator.id}>
                                        <td className="cell1">{senator.id}</td>
                                        <td className="cell1">{senator.first_name}</td>
                                        <td className="cell1">{senator.last_name}</td>
                                        <td className="cell1">{senator.party}</td>
                                        <td className="cell1">{senator.state}</td>
                                        <td className="cell1">{senator.office}</td>
                                        <td className="cell1">{senator.phone}</td>
                                        
                                        
                                        </tr>
                                        
                                 )
                                })}
                                </tbody>
                            </table>
                    </div>
                
                
             

            </div>
      
    )
}

 
export default ProfilePage;