import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap"; 
import "./SenatorByState.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

 
    

const SenatorByState = (props) => {
  // let navigate= useNavigate();
  const { formValues, handleChange, handleSubmit } = useForm(filterbystate);

  

  
  async function filterbystate() {
    props.filteredSenator(formValues);
    console.log(formValues)
  }

    return(
      <div>
      <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            
            <Form onSubmit={handleSubmit} className="Statebox">
            <Form.Label>Search For Senator By State</Form.Label>
                <Form.Select
                  type="text"
                  name="state"
                  onChange={handleChange}
                  required={true}
                >
                  <option value="">Choose A State</option>
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
      </div>
      
      <div className="container">
     
        <div className="col-md-12 ">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
      <div className=" Statetable2">
            <table className="Statewrapper">
                    
                                <thead>
                                    <tr >
                                        <td className="Statecellheader">Member ID </td>
                                        <td className="Statecellheader">First Name </td>
                                        <td className="Statecellheader">Last Name </td>
                                        <td className="Statecellheader">Party Abv.</td>
                                        <td className="Statecellheader">State </td>
                                        <td className="Statecellheader">Office Address </td>
                                        <td className="Statecellheader">Phone</td>
    
                                    </tr>
                                </thead>
                                <tbody><tr>
                                </tr>
                                {props.senatorByStateInput.map((senator) => {
                                 return(
                                    <tr key={senator.id}>
                                        <td className="Statecell1"><Link to='/Senators' state={{senator_id: senator.id}}>{senator.id}</Link></td>
                                        <td className="Statecell1">{senator.first_name}</td>
                                        <td className="Statecell1">{senator.last_name}</td>
                                        <td className="Statecell1">{senator.party}</td>
                                        <td className="Statecell1">{senator.state}</td>
                                        <td className="Statecell1">{senator.office}</td>
                                        <td className="Statecell1">{senator.phone}</td>
                                        
                                        
                                        </tr>
                                        
                                 )
                                })}
                                </tbody>
                            </table>
                    </div>
                    </div>
                    <div className="col-md-2"></div>
            
                    </div>
                    </div>
                    </div>
                    
    )
  }

export default SenatorByState;
