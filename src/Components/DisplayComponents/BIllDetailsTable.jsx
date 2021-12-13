

const BillDetailTable=(props)=>{
    return(
        <div>
            <div className=" Senatortable2">
                  <h5>Bill Details</h5>
                    <table className="Senatorwrapper1">
                       <tbody>
                            <tr>
                               {console.log("check it out",props.billInfo)}
                              <td className="billscell">
                               <h6> Bill ID:</h6> {props.billInfo.bill} <a href={props.billInfo.govtrack_url}>Tracking Link</a>
                              </td> 
                            </tr>
                            <tr>
                               
                              <td className="billscell">
                               <h6> Bill Sponsor:</h6>  {props.billInfo.sponsor} of 
                                {props.billInfo.sponsor_state}
                              </td> 
                            </tr>
                            <tr>
                               
                              <td className="billscell"><h6>Title:</h6>  {props.billInfo.short_title}</td>
                            </tr>

                            <tr>
                               
                              <td className="billscell"><h6>Committees Involved:</h6>  {props.billInfo.committees}</td>
                            </tr>

                            <tr>
                               
                              <td className="billscell">
                                {/* Total Yes Votes - {props.props.billInfo.votes[0].total_yes} |
                                Total No Votes - {props.props.billInfo.votes[0].total_no} |
                                Resulting Action - {props.props.billInfo.votes[0].result} */}
                              </td>
                            </tr>

                            <tr>
                              <td className="billscell"><h6>Subject:</h6>  {props.billInfo.primary_subject}</td>
                            </tr>
                            <tr>
                              <td className="billscell"><h6>Summary:</h6>  {props.billInfo.summary}</td>
                            </tr>
                          </tbody>
                     </table>
                  </div>
                </div>
              
    )
}

export default BillDetailTable;