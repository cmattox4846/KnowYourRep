import React from "react";
import useForm from "../UseForm/UseForm";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";

const BillByDate = (props) => {
  const { formValues, handleChange, handleSubmit } = useForm(searchByDate);

  async function searchByDate() {
    props.getBillByDate(formValues);
    console.log(formValues);
  }

  return (
    <div>
      <div>
        <h3>Search Bills By Date</h3>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
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
          <Button className="button" type="submit">
            Search Bills
          </Button>
        </Form>
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
            {props.billInfo.map((info) => {
              if (info.bill.bill_id != null) {
                return (
                  <tr>
                    <td className="cell1">{info.bill.bill_id}</td>
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
              // else if(info.nomination.nomination_id != null){
              //   return (
              //     <tr>
              //       <td className="cell1">{info.nomination.nomination_id}</td>
              //       <td className="cell1">{info.nomination.Name}</td>
              //       <td className="cell1">{info.nomination.agency}</td>
              //       <td className="cell1">{info.date}</td>
              //       <td className="cell1">{info.question}</td>
              //       <td className="cell1">{info.result}</td>
              //       <td className="cell1">
              //         Yes - {info.democratic.yes} | No - {info.democratic.no}
              //       </td>
              //       <td className="cell1">
              //         Yes - {info.republican.yes} | No - {info.republican.no}
              //       </td>
              //       <td className="cell1">
              //         Yes - {info.independent.yes} | No - {info.independent.no}
              //       </td>
              //       <td className="cell1">
              //         Yes - {info.total.yes} | No - {info.total.no}
              //       </td>
              //     </tr>
              //   );
              // }
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
            {props.billInfo.map((info) => {
            
              if (info.nomination != undefined) {
                return (
                  <tr>
                    <td className="cell1">{info.nomination.nomination_id}</td>
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
