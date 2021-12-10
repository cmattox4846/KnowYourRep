import React, { useEffect, useState} from 'react';
import useForm from "../UseForm/UseForm";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom'
import axios from "axios";
import { propublicakey } from "../../keys";
import "./Bills.css"

const BillByDate = (props) => {
  const { formValues, handleChange, handleSubmit } = useForm(searchByDate);
  const [billDateInfo, setbillDateInfo] = useState([])

  const getBillByDate= async (objectpassed) => {
    console.log(objectpassed.start_date, objectpassed.end_date)
    let response = await axios.get(`https://api.propublica.org/congress/v1/senate/votes/${objectpassed.start_date}/${objectpassed.end_date}.json`, { headers: {"X-API-Key": propublicakey}})
    console.log("Specific Bill By Date " , response.votes)
    setbillDateInfo(response.data.results.votes)  
    console.log(response.data.results)
  }

  async function searchByDate() {
    getBillByDate(formValues);
    console.log(formValues);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
      
      <div>
     
        <Form onSubmit={handleSubmit} className="billsbox">
        <h3>Search Bills By Date</h3>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="start_date"
              onChange={handleChange}
              required={true}
            />
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              onChange={handleChange}
              required={true}
            />
          </Form.Group>
          <input type="submit">
            
          </input>
        </Form>
      </div>
      </div>
      <div className="col-md-2"></div>
      </div>
      </div>

      <div className="table">
        <h2> Bills</h2>
        <table className="wrapper">
          <thead>
            <tr className="header">
              {/* <td>Member ID </td> */}

              <td className="cell">Bill Number </td>
              <td className="cell">Bill Title</td>
              <td className="cell">Date Of Vote </td>
              <td className="cell">Question </td>
              <td className="cell">Action Result </td>
              <td className="cell">Democratic</td>
              <td className="cell">Republican</td>
              <td className="cell">Independent</td>
              <td className="cell">Total Votes</td>
            </tr>
          </thead>
          <tbody>
            
            {billDateInfo.map((info) => {
              if (info.bill.bill_id != undefined) {
                return (
                  <tr>
                    <td className="cell1"><Link to="/Bills" state={{id: info.bill.number}}>{info.bill.bill_id}</Link></td>
                    <td className="cell1">{info.bill.title}</td>
                    <td className="cell1">{info.date}</td>
                    <td className="cell1">{info.question}</td>
                    <td className="cell1">{info.result}</td>
                    <td className="cell1">
                      Yes - {info.democratic.yes} | No - {info.democratic.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.republican.yes} | No - {info.republican.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.independent.yes} | No - {info.independent.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.total.yes} | No - {info.total.no}
                    </td>
                  </tr>
                );
              }
           
})}
          </tbody>
        </table>
      </div>

      <div className="table">
        <h2> Nominations</h2>
        <table className="wrapper">
          <thead>
            <tr className="header">
             

              <td className="cell">Nomination ID </td>
              <td className="cell">Nominee</td>
              <td className="cell">Agency </td>
              <td className="cell">Date Of Vote </td>
              <td className="cell">Question </td>
              <td className="cell">Action Result </td>
              <td className="cell">Democratic</td>
              <td className="cell">Republican</td>
              <td className="cell">Independent</td>
              <td className="cell">Total Votes</td>
            </tr>
          </thead>
          <tbody>
            {billDateInfo.map((info) => {
            
              if (info.nomination != undefined) {
                return (
                  <tr>
                    <td className="cell1"><Link to="/Bills" state={{id: info.nomination.number}}>{info.nomination.nomination_id}</Link></td>
                    <td className="cell1">{info.nomination.Name}</td>
                    <td className="cell1">{info.nomination.agency}</td>
                    <td className="cell1">{info.date}</td>
                    <td className="cell1">{info.question}</td>
                    <td className="cell1">{info.result}</td>
                    <td className="cell1">
                      Yes - {info.democratic.yes} | No - {info.democratic.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.republican.yes} | No - {info.republican.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.independent.yes} | No - {info.independent.no}
                    </td>
                    <td className="cell1">
                      Yes - {info.total.yes} | No - {info.total.no}
                    </td>
                  </tr>
                );
              }
              else{
                return (<div></div>)
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillByDate;
