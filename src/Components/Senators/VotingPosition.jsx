import "./VotingPosition.css";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";
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
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Form onSubmit={handleSubmit} className="box">
                <Form.Group>
                  <Form.Label>Members ID </Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    onChange={handleChange}
                    required={true}
                  />
                </Form.Group>
                <Button className="button" type="submit">
                  Search Senator
                </Button>
                <button type="text" onClick={runGraphs}>See Graph of Results</button>
              </Form>
            </div>
           
          </div>
        </div>
      </div>
      <div className="container">
      <div className="table">
          
        <table >
          <thead >
            <tr className="header">
              {/* <td>Member ID </td> */}
              <td className="cell">Congress # </td>
              <td className="cell">Bill Number </td>
              <td  className="cell">Bill Title</td>
              <td className="cell">Date Of Vote </td>
              <td className="cell">Question </td>
              <td className="cell">Action Result </td>
              <td className="cell">Total Yes's </td>
              <td className="cell">Total No's</td>
              <td className="cell">Members Voting Position</td>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {props.senatorsVotes.map((senator) => {
              return (
                <tr>
                  {/* <td>{senator.member_id}</td> */}
                  <td className="cell1">{senator.congress}</td>
                  <td className="cell1">{senator.bill.number}</td>
                  <td className="cell1">{senator.description}</td>
                  <td className="cell1">{senator.date}</td>
                  <td className="cell1">{senator.question}</td>
                  <td className="cell1">{senator.result}</td>
                  <td className="cell1">{senator.total.yes}</td>
                  <td className="cell1">{senator.total.no}</td>
                  <td className="cell1">{senator.position}</td>
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
