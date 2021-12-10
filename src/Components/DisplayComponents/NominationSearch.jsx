import UseForm from "../UseForm/UseForm"
import Form from "react-bootstrap/Form";




const NominationSearch = (props)=>{

    const {formValues, handleChange, handleSubmit} = UseForm(props.searchNominations);
    return (
        <div className="row">
                    <div className="col-md-6">
                                
                                <div>
                                  <Form onSubmit={handleSubmit} className="billsbox">
                                  <h3>Search Nominations By Id</h3>
                                    <Form.Group>
                                      <Form.Label>Nomination Name ie.(PN1111)</Form.Label>
                                      <Form.Control
                                        type="text"
                                        name="nom_id"
                                        onChange={handleChange}
                                        required={true}
                                      />
                                    </Form.Group>
                                    <input type="submit">
                                     
                                    </input>
                                  </Form>
                                </div>
                         </div>
                         </div>
    )
}

export default NominationSearch;