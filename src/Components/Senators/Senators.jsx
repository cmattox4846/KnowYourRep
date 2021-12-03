import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";

const SenatorScreen = (props) => {
  const { formValues, handleChange, handleSubmit } = useForm(committeeSearch);

  // let navigate= useNavigate();

  async function committeeSearch() {
    props.getCommittee(formValues);
    // navigate("../login")
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
              {props.senator.first_name} {props.senator.last_name} Is A Member
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
        <div>
          <h3>Search Senator Assigned To A State</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingSelect" label="">
            <Form.Select
              type="text"
              name="state"
              onChange={handleChange}
              required={true}
            >
              <option>State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Flordia</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Select>
          </FloatingLabel>
          <Button className="button" type="submit">
            Search Senator
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SenatorScreen;
