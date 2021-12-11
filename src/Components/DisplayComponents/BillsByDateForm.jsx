import React, { useEffect, useState} from 'react';
import useForm from "../UseForm/UseForm";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom'
import axios from "axios";
import { propublicakey } from "../../keys";




const BillsByDateForm = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(props.billsByDateSearch);
    return(
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
    )
}

export default BillsByDateForm