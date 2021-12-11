import { Link } from "react-router-dom";

const NominationsByDateTable=(props)=>{
    return(
        <div className="table">
        <h2> Nominations</h2>
        <table className="wrapper">
          <thead>
            <tr className="header">
             

              <td className="cell">Nomination ID </td>
              <td className="cell">Nominee</td>
              <td className="cell">Agency </td>
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
            
              if (info.nomination !== undefined) {
                return (
                  <tr>
                    <td className="cell1"><Link to="/Bills" state={{nom_id: info.nomination.number}}>{info.nomination.nomination_id}</Link></td>
                    <td className="cell1">{info.nomination.Name}</td>
                    <td className="cell1">{info.nomination.agency}</td>
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
              else{
                return (<div></div>)
              }
            })}
          </tbody>
        </table>
      </div>
    )
}
export default  NominationsByDateTable