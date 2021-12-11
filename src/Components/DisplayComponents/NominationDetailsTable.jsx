


const NominationDetailsTable= (props)=>{
    return(

    
        <div className="col-md-6">
           {console.log("Table",props.nomInfo)}
        <div className=" Senatortable2">
          <h5>Nomination Details</h5>
          <table className="Senatorwrapper1">
            
             <tbody>
                  <tr>
                     
                    <td className="billscell">
                     <h6> Nomination ID:</h6> {props.nomInfo[0].id}
                    </td> 
                  </tr>
                 
                    <tr>
                 
                    <td className="billscell"><h6>Subject:</h6> {props.nomInfo[0].description}</td>
                  </tr>
                  <tr>
                     
                    <td className="billscell">
                    <h6>Status:</h6> {props.nomInfo[0].status} 
                     
                    </td> 
                  </tr>
                  <tr>
                     
                    <td className="billscell"><h6 >Total Yes:</h6> {props.nomInfo[0].votes[0].total_yes}</td>
                  </tr>

                  <tr>
                     
                    <td className="billscell"><h6>Total No:</h6> {props.nomInfo[0].votes[0].total_no}</td>
                  </tr>
                  <tr>
                    <td className="billscell"><h6>Result:</h6> {props.nomInfo[0].votes[0].result}</td>
                  </tr>
                </tbody>
           </table>
        </div>
      </div>
    )
}

export default NominationDetailsTable;