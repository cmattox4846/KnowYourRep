
import "./Senator.css"
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const SenatorScreen = (props) => {
  const { formValues, handleChange, handleSubmit } = useForm(committeeSearch);

  // let navigate= useNavigate();

  async function committeeSearch() {
    props.getCommittee(formValues);

    // let navigate= useNavigate();
  }

  return (
    <div className="container">
      <div className=" col">
      <div className="row">
        <div>
          <div className="col-12">
            <div className="card">
              
              <Form onSubmit={handleSubmit} className="box">
              <p>Search Members Committee Affiliation</p>
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
            </div>
          </div>

          </div>
        </div>
      <div className="table">
        
        <table className="wrapper">
          <thead>
            <tr className="header">
              <td className="cell">
                {console.log(props.specificSenator)}
                {props.specificSenator.first_name}{" "}
                {props.specificSenator.last_name} Is A Member Of These
                Committees
              </td>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {props.senatorInfo.map((committee) => {
              return (
                <tr key={committee.id}>
                  <td className="cell1">{committee.name}</td>
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

export default SenatorScreen;
