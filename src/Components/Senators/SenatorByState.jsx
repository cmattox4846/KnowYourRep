import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";

 
    

const SenatorByState = (props) => {
  // let navigate= useNavigate();
  const { formValues, handleChange, handleSubmit } = useForm(filterbystate);

  async function filterbystate() {
    props.filteredSenator(formValues);
    console.log(formValues)
  }

    return(
      <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            
            <Form onSubmit={handleSubmit} className="Registrationbox">
            <Form.Label>Search For Senator By State</Form.Label>
                <Form.Select
                  type="text"
                  name="state"
                  onChange={handleChange}
                  required={true}
                >
                  <option> </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
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
              
              <input  type="submit">
              
              </input>
            </Form>
      </div>
     
      <div className="col-md-3"></div>
      </div>
      <div className="row">
      <div className="col-md-12>">
      {/* <div><h2>{formValuesState.state}'s Senators Representing </h2></div> */}
                    <Table>
                    
                                <thead>
                                    <tr>
                                        <td>Member ID </td>
                                        <td>First Name </td>
                                        <td>Last Name </td>
                                        <td>Party Abv.</td>
                                        <td>State </td>
                                        <td>Office Address </td>
                                        <td>Phone</td>
    
                                    </tr>
                                </thead>
                                <tbody><tr>
                                </tr>
                                {props.senatorByStateInput.map((senator) => {
                                 return(
                                    <tr key={senator.id}>
                                        <td>{senator.id}</td>
                                        <td>{senator.first_name}</td>
                                        <td>{senator.last_name}</td>
                                        <td>{senator.party}</td>
                                        <td>{senator.state}</td>
                                        <td>{senator.office}</td>
                                        <td>{senator.phone}</td>
                                        
                                        
                                        </tr>
                                        
                                 )
                                })}
                                </tbody>
                            </Table>
                    </div>
                    </div>
                    </div>
    )
  }

export default SenatorByState;
