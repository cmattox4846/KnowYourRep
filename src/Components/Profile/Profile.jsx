import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, { useNavigate} from 'react';

const ProfilePage = (props) => {
   
    // let navigate= useNavigate();

//   async function editForm() {
//     navigate("/updateProfileForm");
//   }

    return (  
       
            <div className="Profile_Table">
                
                    <div className="table">
                        <Table>
                            <tbody>
                                <tr>
                                    <td>First Name: {props.user.first_name}</td>
                                    <td>Last Name: {props.user.last_name}</td>
                                    <td>Username: {props.user.username}</td>
                                    <td>Email: {props.user.email}</td>
                                    <td>State: {props.user.state}</td> 
                                    <td>Zip Code: {props.user.zip_code}</td> 
                                    <td>Party Affiliation: {props.user.party}</td> 
                                    
                                    {/* <td><Button variant="primary" onClick={() => editForm()}>Update Profile</Button></td>                                    */}
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="table">
                    <div><h2>{props.user.state}'s Senators Representing </h2></div>
                    <Table>
                    
                                <thead>
                                    <tr>
                                        <td>Member ID </td>
                                        <td>First Name </td>
                                        <td>Last Name </td>
                                        <td>Party Abv.</td>
                                        <td>State </td>
                                        <td>Office Address </td>
                                        <td>Phone</td>
    
                                    </tr>
                                </thead>
                                <tbody><tr>
                                </tr>
                                {props.senators.map((senator) => {
                                 return(
                                    <tr key={senator.id}>
                                        <td>{senator.id}</td>
                                        <td>{senator.first_name}</td>
                                        <td>{senator.last_name}</td>
                                        <td>{senator.party}</td>
                                        <td>{senator.state}</td>
                                        <td>{senator.office}</td>
                                        <td>{senator.phone}</td>
                                        
                                        
                                        </tr>
                                        
                                 )
                                })}
                                </tbody>
                            </Table>
                    </div>
                
                
             

            </div>
      
    )
}

 
export default ProfilePage;