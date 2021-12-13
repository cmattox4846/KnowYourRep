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


const SenatorScreen = () => {
  const [committeeInfo, setCommitteeInfo] = useState([]);
  const [specificSenator, setSpecificSenator] = useState([]);


  const { formValues, handleChange, handleSubmit } = useForm(committeeSearch);

  const location = useLocation();
  
  const getCommittee = async (objectpassed) => {
    console.log("object coming in  to committee",objectpassed)
     let response = await axios.get(`https://api.propublica.org/congress/v1/members/${objectpassed.id}.json`, { headers: {"X-API-Key": propublicakey}})
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
    getCommittee(location.state)
  }
    },[location])


useEffect(()=>{
// force rerender

  },[specificSenator])

 
      console.log("This is SpecificSenator",specificSenator)
async function committeeSearch() {
getCommittee(formValues);

    // let navigate= useNavigate();
  }

  return (
   <div>
     {specificSenator.id === undefined ?
     <div></div>
     :
    <div className="container">
          <div className="row">
            
                    <div className="col-md-5">
                      <div className=" Senatortable2">
                        <table className="Senatorwrapper1">
                             <tbody><tr>
                             </tr>
                                 <tr > <td className="SenatorcellLeft">Senate Member ID </td><td className="Senatorcell"><Link to="/VotingPosition" state={{id: specificSenator.id}}>{specificSenator.id}'s Voting Position</Link></td></tr>
                                 <tr > <td className="SenatorcellLeft">Name</td><td className="Senatorcell">{specificSenator.first_name} {specificSenator.last_name}</td></tr>
                                 <tr > <td className="SenatorcellLeft">Office Goverment Site</td><td className="Senatorcell"><a href={specificSenator.url}>{specificSenator.url}</a></td></tr>
                                 <tr > <td className="SenatorcellLeft">Party</td><td className="Senatorcell">{specificSenator.current_party}</td></tr>
             
               
                        <tr > <td className="SenatorcellLeft">State</td><td className="Senatorcell">{specificSenator.roles[0].state}</td></tr>
                        <tr > <td className="SenatorcellLeft">State Rank</td><td className="Senatorcell">{specificSenator.roles[0].state_rank}</td></tr>
                        <tr > <td className="SenatorcellLeft">Total Votes</td><td className="Senatorcell">{specificSenator.roles[0].total_votes}</td></tr>
                        <tr > <td className="SenatorcellLeft">Vote % With Party</td><td className="Senatorcell">{specificSenator.roles[0].votes_with_party_pct}%</td></tr>
                        <tr > <td className="SenatorcellLeft">Vote % Against Party</td><td className="Senatorcell">{specificSenator.roles[0].votes_against_party_pct}%</td></tr>
                        <tr > <td className="SenatorcellLeft">Contact Directly</td><td className="Senatorcell"><a href ={specificSenator.roles[0].contact_form}>{specificSenator.roles[0].contact_form}</a></td></tr>
                        <tr > <td className="SenatorcellLeft">Phone Number</td><td className="Senatorcell">{specificSenator.roles[0].phone}</td></tr>
                        <tr > <td className="SenatorcellLeft">Office Location</td><td className="Senatorcell">{specificSenator.roles[0].office}</td></tr>
                                                          
                             </tbody>
                         </table>
                      </div>
                    </div>
                   
                      <div className="col-md-7 ">
                          <div className="Senatortable2">
                            
                            <table className="Senatorwrapper">
                              <thead>
                                <tr>
                                  <td className="Senatorcell">
                                    {/* {console.log(specificSenator)} */}
                                    <h6>{specificSenator.first_name}{" "}
                                    {specificSenator.last_name} Is Currently A Member Of These
                                    Committees</h6>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr></tr>
                                {committeeInfo.map((committee) => {
                                  return (
                                    <tr key={committee.id}>
                                      <td className="Senatorcell">{committee.name}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            </div>
                        </div> 
         
      </div>
      </div>
      }
  </div>  
  );
};

export default SenatorScreen;
