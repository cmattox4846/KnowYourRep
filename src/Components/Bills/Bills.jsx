import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { propublicakey } from "../../keys";
import axios from "axios";
import  "./Bills.css"

const BillsSearch = (props) => {
  // let navigate= useNavigate();
  const { formValues, handleChange, handleSubmit } = useForm(SearchBills);
  const [billInfo, setbillInfo] = useState([])
  
  const location = useLocation();

  const getSpecificBill= async (objectpassed) => {
    const id = objectpassed.bill_id
    console.log("Bill Id ", objectpassed)
    let response = await axios.get(`https://api.propublica.org/congress/v1/117/bills/${id}.json`, { headers: {"X-API-Key": propublicakey}})
    console.log("Specific Bill " , response.data.results[0])
    setbillInfo(response.data.results[0])  
  }
  const getSpecificNomination= async (objectpassed) => {
    const id = objectpassed.id
    console.log("Nominee Id ", objectpassed.id)
    let response = await axios.get(` https://api.propublica.org/congress/v1/117/nominees/${id}.json`, { headers: {"X-API-Key": propublicakey}})
    console.log("Specific Nomination " , response.data)
    setbillInfo(response.data.results[0])  
  }

  useEffect(()=>
  {
    if ( location.state.bill_id != undefined)
  {
    console.log("Location data", location)
    getSpecificBill(location.state)
  }
  else{

    getSpecificNomination(location.state)
  }
},[])
 
  

  async function SearchBills() {
    getSpecificBill(formValues);
    
  }



  return (
    <div>
     
       <div className="container">
          <div className="row">
                    <div className="col-md-6">
                                <div>
                                  <h3>Search Bills By Id</h3>
                                </div>
                                <div>
                                  <Form onSubmit={handleSubmit} className="billsbox">
                                    <Form.Group>
                                      <Form.Label>Bill Name ie.(HR1111)</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="id"
                                        onChange={handleChange}
                                        required={true}
                                      />
                                    </Form.Group>
                                    <input type="submit">
                                     
                                    </input>
                                  </Form>
                                </div>
                         </div>
                         <div className="col-md-6">
                                <div>
                                  <h3>Search Nomination By Id</h3>
                                </div>
                                <div>
                                  <Form onSubmit={handleSubmit} className="billsbox">
                                    <Form.Group>
                                      <Form.Label>Nomination Name ie.(PN1111)</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="id"
                                        onChange={handleChange}
                                        required={true}
                                      />
                                    </Form.Group>
                                    <input  type="submit">
                                     
                                    </input>
                                  </Form>
                                </div>
                         </div>
                  </div>
          </div>
  
      {/* {if (billInfo.bill_id !== undefined){ */}
     
     
     
      <div className="container">
          <div className="row">
                    <div className="col-md-6">
                      <div className=" Senatortable2">
                      <h5>Bill Details</h5>
                        <table className="Senatorwrapper1">
                           <tbody>
                                <tr>
                                   
                                  <td>
                                    Bill ID - {billInfo.bill} <a href={billInfo.govtrack_url}>Tracking Link</a>
                                  </td> 
                                </tr>
                                <tr>
                                   
                                  <td>
                                    Bill Sponsor - {billInfo.sponsor} of 
                                    {billInfo.sponsor_state}
                                  </td> 
                                </tr>
                                <tr>
                                   
                                  <td>Title - {billInfo.short_title}</td>
                                </tr>

                                <tr>
                                   
                                  <td>Committees Involved - {billInfo.committees}</td>
                                </tr>

                                <tr>
                                   
                                  <td>
                                    {/* Total Yes Votes - {props.billInfo.votes[0].total_yes} |
                                    Total No Votes - {props.billInfo.votes[0].total_no} |
                                    Resulting Action - {props.billInfo.votes[0].result} */}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Subject - {billInfo.primary_subject}</td>
                                </tr>
                                <tr>
                                  <td>Summary: {billInfo.summary}</td>
                                </tr>
                              </tbody>
                         </table>
                      </div>
                    </div>
      {/* }
      else if (billInfo.nomaination_id != undefined){ */}
                  
                    <div className="col-md-6">
                      <div className=" Senatortable2">
                        <h5>Nomination Details</h5>
                        <table className="Senatorwrapper1">
                          
                           <tbody>
                                <tr>
                                   
                                  <td>
                                    Nomination ID - {billInfo.id}
                                  </td> 
                                </tr>
                               
                                  <tr>
                               
                                  <td>Subject - {billInfo.description}</td>
                                </tr>
                                <tr>
                                   
                                  <td>
                                    Status - {billInfo.status} 
                                   
                                  </td> 
                                </tr>
                                <tr>
                                   
                                  <td>Total Yes - {billInfo.votes[0].total_yes}</td>
                                </tr>

                                <tr>
                                   
                                  <td>Total No - {billInfo.votes[0].total_no}</td>
                                </tr>
                                <tr>
                                  <td>Result: {billInfo.votes[0].result}</td>
                                </tr>
                              </tbody>
                         </table>
                      </div>
                    </div>
      
            </div>
          </div>
  {/* } */}
    </div>
  );
};

export default BillsSearch;
