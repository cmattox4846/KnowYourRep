import { Link } from "react-router-dom";

const BillsByDateTable =(props)=>{
    return(
<div className="table">
        <h2> Bills</h2>
        <table className="wrapper">
          <thead>
            <tr className="header">
              {/* <td>Member ID </td> */}

              <td className="cell">Bill Number </td>
              <td className="cell">Bill Title</td>
              <td className="cell">Date Of Vote </td>
              <td className="cell">Question </td>
              <td className="cell">Action Result </td>
              <td className="cell">Democratic</td>
              <td className="cell">Republican</td>
              <td className="cell">Independent</td>
              <td className="cell">Total Votes</td>
            </tr>
          </thead>
          <tbody>
            
            {props.billDateInfo.map((info) => {
              if (info.bill.bill_id != undefined) {
                return (
                  <tr>
                    {console.log("bill info by date",info.bill)}
                    <td className="cell1"><Link to="/Bills" state={{bill_id: info.bill.number}}>{info.bill.bill_id}</Link></td>
                    <td className="cell1">{info.bill.title}</td>
                    <td className="cell1">{info.date}</td>
                    <td className="cell1">{info.question}</td>
                    <td className="cell1">{info.result}</td>
                    <td className="cell1">
                      Yes - {info.democratic.yes} | No - {info.democratic.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.republican.yes} | No - {info.republican.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.independent.yes} | No - {info.independent.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.total.yes} | No - {info.total.no}
                    </td>
                  </tr>
                );
              }
           
})}
          </tbody>
        </table>
      </div>
    )
}
export default BillsByDateTable