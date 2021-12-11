
const ProfileSenatorsTable=(props)=>{
    return(
        <div>
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
        </div>
        
    )

}

export default ProfileSenatorsTable