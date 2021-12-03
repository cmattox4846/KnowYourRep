
import Form from 'react-bootstrap/Form'
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';


const RegistrationScreen = (props) => 
{
    const {formValues, handleChange, handleSubmit } = useForm(Register);
    
    let navigate= useNavigate();

    async function Register() { 
        console.log(`from registration${formValues.firstName}+${formValues.state}+${formValues.party}`)                  
        props.registerUser(formValues)
        navigate("../login")
    }  


    
        return (
            <div className="formCreate">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name:  </Form.Label>
                        <Form.Control type="text" name='firstName' onChange={handleChange} required={true}/>
                        
                    </Form.Group>
                     
                    <Form.Group>
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" name='lastName' onChange={handleChange} required={true}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" name='email' onChange={handleChange} required={true}/>
                    </Form.Group>
                   
                    <Form.Select type="text" name='state' onChange={handleChange} required={true} >

                      
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
                    
                   
                    <Form.Group>
                        <Form.Label>Zip Code: </Form.Label>
                        <Form.Control type="text" name='zip_code' onChange={handleChange}required={true}/>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Party: </Form.Label>
                        <Form.Control type="text" name='party' onChange={handleChange}required={true}/>
                    </Form.Group> */}
                    
                    <FloatingLabel controlId="floatingSelect" label="Party Afiliation:">
                        <Form.Select  type="text" name='party' onChange={handleChange}required={true} aria-label="Floating label select example">
                       
                            <option>Party Afiliation</option>
                            <option value="Republican">Republican</option>
                            <option value="Democrate">Democrate</option>
                            <option value="Independent">Independent</option>
                            <option value="None">None</option>
                        </Form.Select>
                    </FloatingLabel> 
                    <Form.Group>
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type="text" name='userName' onChange={handleChange} required={true}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" name='password' onChange={handleChange} required={true}/>
                    </Form.Group>
                    
                   
                   
                    <Button className="button" type="submit">Create User</Button>
                </Form>
            </div>
        )
    }

 
export default RegistrationScreen;