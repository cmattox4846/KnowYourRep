import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";
import {BrowserRouter as Router, Routes,Route,Link,Outlet} from 'react-router-dom'

const SenatorScreen = (props) => {
  const { formValues, handleChange, handleSubmit } = useForm(committeeSearch);
 
  // let navigate= useNavigate();

  async function committeeSearch() {
    props.getCommittee(formValues);
   
    

  // let navigate= useNavigate();

  }

  return (
    <div className="formCreate">
      <div>
        <h3>Search Members Committee Affiliation</h3>
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
            <td>
                {console.log(props.specificSenator)}
              {props.specificSenator.first_name} {props.specificSenator.last_name} Is A Member
              Of These Committees
            </td>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {props.senatorInfo.map((committee) => {
            return (
              <tr key={committee.id}>
                <td>{committee.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <outlet />
     </div>
     <div>
     {/* <Route path="/SenatorsByState" element={<SenatorByState senatorByStateInput={senatorByStateInput} filteredSenator={filterSenators} />} /> */}

     </div>
    </div>
    
  );
};

export default SenatorScreen
