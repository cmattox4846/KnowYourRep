import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";

 
    

const BillsSearch = (props) => {
  // let navigate= useNavigate();
  const { formValues, handleChange, handleSubmit } = useForm(SearchBills);

  async function SearchBills() {
    props.getBills(formValues);
    console.log(formValues)
  }

    return(
       <div> 
            <div>
                <h3>Search Bills Id</h3>
            </div>
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Bill Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <Button className="button" type="submit">
          Search Bills
        </Button>
      </Form>
      </div>
      {/* <div><h2>{formValuesState.state}'s Senators Representing </h2></div> */}
                    <Table>
                    
                                <thead>
                                    <tr>
                                        <td>Member ID </td>
                                        <td>First Name </td>
                                        <td>Last Name </td>
                                        <td>Party Abv.</td>
                                        <td>State </td>
                                        <td>Office Address </td>
                                        <td>Phone</td>
    
                                    </tr>
                                </thead>
                                <tbody><tr>
                                </tr>
                                {props.senatorByStateInput.map((senator) => {
                                 return(
                                    <tr key={senator.id}>
                                        <td>{senator.id}</td>
                                        <td>{senator.first_name}</td>
                                        <td>{senator.last_name}</td>
                                        <td>{senator.party}</td>
                                        <td>{senator.state}</td>
                                        <td>{senator.office}</td>
                                        <td>{senator.phone}</td>
                                        
                                        
                                        </tr>
                                        
                                 )
                                })}
                                </tbody>
                            </Table>
                    </div>
    )
  }

export default BillsSearch;
