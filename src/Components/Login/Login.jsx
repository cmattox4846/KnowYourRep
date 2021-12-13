import React from "react";
import Form from "react-bootstrap/Form"

import { useNavigate } from "react-router";
import useForm from "../UseForm/UseForm";
import "./Login.css";
import axios from "axios";

import {BrowserRouter as Router, Routes,Route,Link,Outlet} from 'react-router-dom'




const LoginScreen = (props) => {
    const {formValues, handleChange, handleSubmit } = useForm(login);
    
    let navigate= useNavigate();

    async function loginUser(loginUser) {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
        localStorage.setItem('token', response.data.access);
        // window.location="/Profile"
        //console.log("response axios call", response.data)
        }

    async function login() { 
       // console.log("from login" + formValues)                  
        loginUser(formValues)
        navigate("../Profile")
    }  


    return ( 
  <div className="container">
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            
            <Form onSubmit= {handleSubmit} className="loginbox">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-muted"> Please enter your login and password!</p>
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
        <div className="col-md-3"></div>
    </div>
</div>
       

   
    );
}

 
export default LoginScreen;


