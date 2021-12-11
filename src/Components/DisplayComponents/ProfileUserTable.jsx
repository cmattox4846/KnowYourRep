

const ProfileUserTable=(props)=>{
    return(
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
    )
}
export default ProfileUserTable