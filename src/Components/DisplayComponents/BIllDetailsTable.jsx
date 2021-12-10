

const BillDetailTable=(props)=>{
    return(
        <div>
            <div className=" Senatortable2">
                  <h5>Bill Details</h5>
                    <table className="Senatorwrapper1">
                       <tbody>
                            <tr>
                               
                              <td>
                                Bill ID - {props.billInfo.bill} <a href={props.billInfo.govtrack_url}>Tracking Link</a>
                              </td> 
                            </tr>
                            <tr>
                               
                              <td>
                                Bill Sponsor - {props.billInfo.sponsor} of 
                                {props.billInfo.sponsor_state}
                              </td> 
                            </tr>
                            <tr>
                               
                              <td>Title - {props.billInfo.short_title}</td>
                            </tr>

                            <tr>
                               
                              <td>Committees Involved - {props.billInfo.committees}</td>
                            </tr>

                            <tr>
                               
                              <td>
                                {/* Total Yes Votes - {props.props.billInfo.votes[0].total_yes} |
                                Total No Votes - {props.props.billInfo.votes[0].total_no} |
                                Resulting Action - {props.props.billInfo.votes[0].result} */}
                              </td>
                            </tr>

                            <tr>
                              <td>Subject - {props.billInfo.primary_subject}</td>
                            </tr>
                            <tr>
                              <td>Summary: {props.billInfo.summary}</td>
                            </tr>
                          </tbody>
                     </table>
                  </div>
                </div>
              
    )
}

export default BillDetailTable;