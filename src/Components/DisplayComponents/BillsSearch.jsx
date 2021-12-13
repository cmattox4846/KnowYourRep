import UseForm from "../UseForm/UseForm";

import { Form } from "react-bootstrap";

const BillsSearch = (props) => {
  const { formValues, handleChange, handleSubmit } = UseForm(props.searchBills);
  return (
    <div>
      <Form onSubmit={handleSubmit} className="billsbox">
        <h3>Search Bills By Id</h3>
        <Form.Group>
          <Form.Label>Bill Name ie.(HR1111)</Form.Label>
          <Form.Control
            autoComplete="off"
            type="text"
            name="id"
            onChange={handleChange}
            required={true}
          />
        </Form.Group>
        <input type="submit"></input>
      </Form>
    </div>
  );
};

export default BillsSearch;
