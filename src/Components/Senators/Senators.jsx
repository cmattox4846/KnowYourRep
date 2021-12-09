import React, { useEffect, useState} from 'react';
import "./Senator.css"
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import {useLocation, useNavigate  } from "react-router";
import Button from "react-bootstrap/Button";
import axios from 'axios';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { propublicakey } from '../../keys';
import { unstable_composeClasses } from '@mui/base';

const SenatorScreen = (props) => {
  const [committeeInfo, setCommitteeInfo] = useState([]);
  const [specificSenator, setSpecificSenator] = useState([]);


  const { formValues, handleChange, handleSubmit } = useForm(committeeSearch);

  const location = useLocation();
  
  const getCommittee = async (objectpassed) => {
    console.log("object coming in  to committee",objectpassed)
     let response = await axios.get(`https://api.propublica.org/congress/v1/members/${objectpassed}.json`, { headers: {"X-API-Key": propublicakey}})
     console.log("These are the Senators committees" , response.data.results[0].roles[0].committees)
     setCommitteeInfo(response.data.results[0].roles[0].committees)
     setSpecificSenator(response.data.results[0])  
   }
  // let navigate= useNavigate();
  useEffect(()=>
  {
    if ( location.state !== undefined)
  {
    console.log("Location data", location)
    getCommittee(location.state.senator_id)
  }
  else
  {
   return <div></div>
  }

    },[])
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
                {console.log(specificSenator)}
                {specificSenator.first_name}{" "}
                {specificSenator.last_name} Is A Member Of These
                Committees
              </td>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {committeeInfo.map((committee) => {
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
