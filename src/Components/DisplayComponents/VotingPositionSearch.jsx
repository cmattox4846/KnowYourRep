import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useNavigate, useLocation} from "react-router";
import {
    Link,
  } from "react-router-dom";

const VotingPositionSearch=(props)=>{
    
    const { formValues, handleChange, handleSubmit } = useForm(props.VotingSearch);

    let location = useLocation()

   
    return(
        <div>
        <Form onSubmit={handleSubmit} className="VPbox">
        <Form.Group>
          <Form.Label>Members ID </Form.Label>
          <Form.Control
            type="text"
            name="id"
            onChange={handleChange}
            required={true}
            placeholder={location.state.id}
            value = {location.state.id}
          />
        </Form.Group>
        <input  type="submit">
         
        </input>
        {/* <Link to="/BarChart" state={{}} type="text" onClick={runGraphs}>See on Graph</Link> */}
        
      </Form>
      </div>
    )
}

export default VotingPositionSearch;