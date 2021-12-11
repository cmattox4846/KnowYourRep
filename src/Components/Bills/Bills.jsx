import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import useForm from "../UseForm/UseForm";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { propublicakey } from "../../keys";
import axios from "axios";
import "./Bills.css";
import { render } from "@testing-library/react";
import SearchBars from "../DisplayComponents/SearchBars";
import BillDetailTable from "../DisplayComponents/BIllDetailsTable";
import NominationDetailsTable from "../DisplayComponents/NominationDetailsTable";

const BillsSearch = (props) => {
  // let navigate= useNavigate();

  const [billInfo, setbillInfo] = useState([]);
  const [nominationInfo, setNominationInfo] = useState([]);

  const location = useLocation();

  const getSpecificBill = async (objectpassed) => {
    const id = objectpassed.id;
    console.log("Bill Id ", objectpassed);
    let response = await axios.get(
      `https://api.propublica.org/congress/v1/117/bills/${id}.json`,
      { headers: { "X-API-Key": propublicakey } }
    );
    // console.log("Specific Bill " , response.data.results[0])
    setbillInfo(response.data.results[0]);
  };
  const getSpecificNomination = async (objectpassed) => {
    const id = objectpassed.nom_id;
    console.log("Nominee Id ", objectpassed.nom_id, id);
    let response = await axios.get(
      ` https://api.propublica.org/congress/v1/117/nominees/${id}.json`,
      { headers: { "X-API-Key": propublicakey } }
    );
    console.log("Specific Nomination ", response.data.results);
    setNominationInfo(response.data.results);
  };

  useEffect(() => {
    if (location.state.nom_id !== undefined) {
      getSpecificNomination(location.state);
 
    } else {
           
      console.log("Location data", location);
      //getSpecificBill(location.state);
    }
  }, []);

  async function SearchBills(formValues) {
    console.log(formValues);
    getSpecificBill(formValues);
  }
  async function SearchNominations(formValues) {
    console.log("Nom Form",formValues);
    getSpecificNomination(formValues);
  }

  return (
    <div>
      

      <div className="container">
        <div className="row">
        <SearchBars
        searchNominations={SearchNominations} searchBills={SearchBills} />
         
         
         
          {billInfo.length !== 0 ? 
            <div className="col-md-6">
              <BillDetailTable billInfo={billInfo} />
            </div>
          : <div> </div>
          }

          {nominationInfo.length !== 0 ? 
            
            <NominationDetailsTable nomInfo={nominationInfo} />
          :<div></div>
          }



          
        </div>
      </div>
    </div>
   
  );
};

export default BillsSearch;
