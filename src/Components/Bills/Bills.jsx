import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

const BillsSearch = (props) => {
  // let navigate= useNavigate();
  const { formValues, handleChange, handleSubmit } = useForm(searchByDate);
  const location = useLocation();

  if( location.state != undefined){
    console.log(location.state.bill_id)
  }

  let navigate= useNavigate();

  async function SearchBills() {
    props.getBills(formValues);
    console.log(formValues);
  }

  async function searchByDate() {
    props.getBillByDate(formValues);
    console.log(formValues);
    navigate("/BillByDate");
  }
//   useEffect(()=>{
//  getData()
//   },[])


  return (
    <div>
      <div>
        <h3>Search Bills By Id</h3>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Bill Name ie.(HR1111)</Form.Label>
            <Form.Control
              type="text"
              name="bill_id"
              onChange={handleChange}
              required={true}
            />
          </Form.Group>
          <Button className="button" type="submit">
            Search Bills
          </Button>
        </Form>
      </div>

     
      
      <Table>
      
        <tbody>
          <tr>
            {" "}
            <td>
              Bill ID - {props.billInfo.bill} <a href={props.billInfo.govtrack_url}>Tracking Link</a>
            </td>{" "}
          </tr>
          <tr>
            {" "}
            <td>
              Bill Sponsor - {props.billInfo.sponsor} of{" "}
              {props.billInfo.sponsor_state}
            </td>{" "}
          </tr>
          <tr>
            {" "}
            <td>Title - {props.billInfo.short_title}</td>
          </tr>

          <tr>
            {" "}
            <td>Committees Involved - {props.billInfo.committees}</td>
          </tr>

          <tr>
            {" "}
            <td>
              {/* Total Yes Votes - {props.billInfo.votes[0].total_yes} |
              Total No Votes - {props.billInfo.votes[0].total_no} |
              Resulting Action - {props.billInfo.votes[0].result} */}
            </td>
          </tr>

          <tr>
            <td>Subject - {props.billInfo.primary_subject}</td>
          </tr>
          <tr>
            <td>Summary: {props.billInfo.summary}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BillsSearch;
