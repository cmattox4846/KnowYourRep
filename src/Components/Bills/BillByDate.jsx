import React, {useState} from 'react';

import axios from "axios";
import { propublicakey } from "../../keys";
import "./Bills.css"
import BillsByDateForm from '../DisplayComponents/BillsByDateForm';
import BillsByDateTable from '../DisplayComponents/BillByDateTable';
import NominationsByDateTable from '../DisplayComponents/NominationsByDateTable';

const BillByDate = (props) => {
 
  const [billDateInfo, setbillDateInfo] = useState([])

  const getBillByDate= async (objectpassed) => {
    // console.log(objectpassed.start_date, objectpassed.end_date)
    let response = await axios.get(`https://api.propublica.org/congress/v1/senate/votes/${objectpassed.start_date}/${objectpassed.end_date}.json`, { headers: {"X-API-Key": propublicakey}})
    // console.log("Specific Bill By Date " , response.votes)
    setbillDateInfo(response.data.results.votes)  
    // console.log(response.data.results.votes)
  }

  async function searchByDate(formValues) {
    getBillByDate(formValues);
    // console.log(formValues);
  }

  return (
    <div>
      
      <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <BillsByDateForm billsByDateSearch={searchByDate}/>
            </div>
      <div className="col-md-2"></div>
         </div>
     {/* {console.log("date info",billDateInfo)} */}
         {billDateInfo[0] !== undefined
         ?
         <div>
             <BillsByDateTable billDateInfo={billDateInfo}/>

              <NominationsByDateTable billDateInfo={billDateInfo}/>
          </div>
    
     :<div></div>}
    </div>
    </div>
  );
};

export default BillByDate;
