import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import useForm from "../UseForm/UseForm";
import "./Login.css";

import {BrowserRouter as Router, Routes,Route,Link,Outlet} from 'react-router-dom'




const LoginScreen = (props) => {
    const {formValues, handleChange, handleSubmit } = useForm(login);
    
    let navigate= useNavigate();

    async function login() { 
       // console.log("from login" + formValues)                  
        props.loginUserCall(formValues)
        navigate("../Profile")
    }  


    return ( 
  <div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card">
            <Form onSubmit= {handleSubmit} className="box">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <p class="text-muted"> Please enter your login and password!</p>
                  <Form.Label >User Name</Form.Label>
                   <Form.Control type="text" name="username"onChange= {handleChange} required= {true}/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password"  onChange= {handleChange} required= {true}/>
               </Form.Group>

               <input type="submit" ></input>
                 
           
                         
                    <div className="col-md-12" >
                     <br></br>
                    Not a User Yet!  <Link to="/userRegistration">Create User</Link>
                        
                    </div>
                </Form>
            </div>
        </div>
    </div>
</div>
       

     
        //    maxWidth="lg"
        //    style={{borderStyle:"dashed", borderColor: "red"}}>
        //    <Box style
        //     <Form onSubmit= {handleSubmit}>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //           <Form.Label>User Name</Form.Label>
        //           <Form.Control type="username" name="username" placeholder="Enter UserName" onChange= {handleChange} required= {true}/>

        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //           <Form.Label>Password</Form.Label>
        //           <Form.Control type="password" name="password" placeholder="Password" onChange= {handleChange} required= {true}/>
        //         </Form.Group>

        //         <Button variant="primary" type="submit" >
        //           Submit
        //         </Button>
        //     </Form>
        //   <div><p>Not a User Yet!  <Link to="/userRegistration">Create User</Link></p></div>
        //    </Container>
        // </div> */}

    );
}

 
export default LoginScreen;


