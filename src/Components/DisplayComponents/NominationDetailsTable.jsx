


const NominationDetailsTable= (props)=>{
    return(

    
        <div className="col-md-6">
           {console.log("Table",props.nomInfo)}
        <div className=" Senatortable2">
          <h5>Nomination Details</h5>
          <table className="Senatorwrapper1">
            
             <tbody>
                  <tr>
                     
                    <td>
                      Nomination ID - {props.nomInfo[0].id}
                    </td> 
                  </tr>
                 
                    <tr>
                 
                    <td>Subject - {props.nomInfo[0].description}</td>
                  </tr>
                  <tr>
                     
                    <td>
                      Status - {props.nomInfo[0].status} 
                     
                    </td> 
                  </tr>
                  <tr>
                     
                    <td>Total Yes - {props.nomInfo[0].votes[0].total_yes}</td>
                  </tr>

                  <tr>
                     
                    <td>Total No - {props.nomInfo[0].votes[0].total_no}</td>
                  </tr>
                  <tr>
                    <td>Result: {props.nomInfo[0].votes[0].result}</td>
                  </tr>
                </tbody>
           </table>
        </div>
      </div>
    )
}

export default NominationDetailsTable;