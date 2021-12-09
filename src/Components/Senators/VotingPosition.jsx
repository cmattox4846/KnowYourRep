import "./VotingPosition.css";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button"; 
import "./VotingPosition.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const VotingPosition = (props) => {
  const { formValues, handleChange, handleSubmit } = useForm(VotingSearch);

  let navigate = useNavigate();

  async function VotingSearch() {
    props.getVotingPosition(formValues);
  }
  async function runGraphs() {
    navigate("/BarChart");
  }

  return (
    <div className="container">
      
          
                    
        <div className="row">
         
            <div className="col-2"></div>
            <div className="col-8">
                             <Form onSubmit={handleSubmit} className="VPbox">
                  <Form.Group>
                    <Form.Label>Members ID </Form.Label>
                    <Form.Control
                      type="text"
                      name="id"
                      onChange={handleChange}
                      required={true}
                    />
                  </Form.Group>
                  <input  type="submit">
                   
                  </input>
                  <button type="text" onClick={runGraphs}>
                    See Graph of Results
                  </button>
                </Form>
               
              </div>
              <div className="col-2"></div>
            
          {/* </div> */}
          
        
        

        
        <div className="VPtable2">
        
          <table className="VPwrapper">
            <thead>
              <tr >
                <td className="VPcellheader">Congress # </td>
                <td className="VPcellheader">Bill Number </td>
                <td className="VPcellheader">Bill Title</td>
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
                    <td className="VPcell1"><Link to='/Bills' state={{bill_id: senator.bill.number}}>{senator.bill.number}</Link></td>
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
     
    </div>
  );
};

export default VotingPosition;
