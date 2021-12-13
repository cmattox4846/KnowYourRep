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
import SenatorByStateForm from "../DisplayComponents/SenatorByStateForm";
import SenatorByStateTable from "../DisplayComponents/SenatorByStateTable";

import React, { useEffect, useState} from 'react';
    

const SenatorByState = (props) => {
  const [senatorByStateInput, setSenatorByStateInput] = useState([])

  // let navigate= useNavigate();
  
  const filterSenators=(objectpassed)=>{
    // setSenatorLoad(!senatorLoad)
    console.log("object passed", objectpassed)
    console.log(props.senatorList)
     const senator = props.senatorList.filter(state => state.state === objectpassed.state)
     console.log("this is the array senator", senator)
     setSenatorByStateInput(senator)
   }
 
   
  
  

  
  async function filterbystate(formValues) {
    filterSenators(formValues);
    console.log(formValues)
  }

    return(
      <div>
      <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            
           <SenatorByStateForm filterbystate={filterbystate}/>
      </div>
     
      <div className="col-md-3"></div>
      </div>
      </div>
      
      <div className="container">
     
        <div className="col-md-12 ">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <SenatorByStateTable senatorByStateInput={senatorByStateInput}/>
      
                    </div>
                    <div className="col-md-2"></div>
            
                    </div>
                    </div>
                    </div>
                    
    )
  }

export default SenatorByState;
