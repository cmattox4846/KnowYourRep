import { Link } from "react-router-dom";

const VotingPositionNominationTable =(props)=>{
    return(
        <div>
            <div className="VPtable2">
            
            <table className="VPwrapper">
              <thead>
                <tr >
                  <td className="VPcellheader">Congress # </td>
                  <td className="VPcellheader">Nomination Number </td>
                  <td className="VPcellheader">Nomination Title</td>
                  <td className="VPcellheader">Date Of Vote </td>
                  <td className="VPcellheader">Question </td>
                  <td className="VPcellheader">Action Result </td>
                  <td className="VPcellheader">Total Yes's </td>
                  <td className="VPcellheader">Total No's</td>
                  <td className="VPcellheader">Members Voting Position</td>
                </tr>
              </thead>
              <tbody>
            <tr></tr>
            {props.senatorsVotes.map((senator) => {
              return (
                <tr>
                 
                  <td className="VPcell1">{senator.congress}</td>
                  <td className="VPcell1"><Link to='/Bills' state={{nom_id: senator.nomination.number}}>{senator.bill.number}</Link></td>
                  <td className="VPcell1">{senator.description}</td>
                  <td className="VPcell1">{senator.date}</td>
                  <td className="VPcell1">{senator.question}</td>
                  <td className="VPcell1">{senator.result}</td>
                  <td className="VPcell1">{senator.total.yes}</td>
                  <td className="VPcell1">{senator.total.no}</td>
                  <td className="VPcell1">{senator.position}</td>
                </tr>
              );
            })}
          </tbody>
            </table>
          </div>
          </div>
        )
    }


export default VotingPositionNominationTable
    
