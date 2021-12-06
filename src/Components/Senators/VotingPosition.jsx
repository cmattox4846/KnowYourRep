import Table from "react-bootstrap/Table";
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

  // let navigate= useNavigate();

  async function VotingSearch() {
    props.getVotingPosition(formValues);
  }


  return (
    <div>
      <div>
        <h3>Search Senators Voting Position</h3>
      </div>
      <Form onSubmit={handleSubmit}>
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
      </Form>
      <Table>
        <thead>
          <tr>
            {/* <td>Member ID </td> */}
            <td>Congress # </td>
            <td>Bill Number </td>
            <td>Bill Title</td>
            <td>Date Of Vote </td>
            <td>Question </td>
            <td>Action Result </td>
            <td>Total Yes's </td>
            <td>Total No's</td>
            <td>Members Voting Position</td>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {props.senatorsVotes.map((senator) => {
            return (
              <tr key={senator.member_id}>
                {/* <td>{senator.member_id}</td> */}
                <td>{senator.congress}</td>
                <td>{senator.bill.number}</td>
                <td>{senator.description}</td>
                <td>{senator.date}</td>
                <td>{senator.question}</td>
                <td>{senator.result}</td>
                <td>{senator.total.yes}</td>
                <td>{senator.total.no}</td>
                <td>{senator.position}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default VotingPosition;
