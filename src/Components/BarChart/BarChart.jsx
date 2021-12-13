import React from "react";

import { useEffect, useState} from 'react';

import axios from "axios";
import { propublicakey } from '../../keys';
import { useLocation,useNavigate } from 'react-router';
import BarChartBillsDisplayTable from "../DisplayComponents/BarChartBillsDisplayTable";
import BarChartNominationsDisplayTable from "../DisplayComponents/BarChartNominationsDisplayTable";

const BarChart = (props) => {
  const [senatorNomVoteList, setSenatorNomVoteList] = useState([])
  const [senatorBillVoteList, setSenatorBillVoteList] = useState([])
  

  const getSenatorVotingRecord = async (objectfromform) => {
    let memberId = objectfromform.id
    let response = await axios.get(`https://api.propublica.org/congress/v1/members/${memberId}/votes.json`, { headers: {"X-API-Key": propublicakey}})
    // console.log("These are the Senators votes from API " , response.data.results[0].votes)
    // setSenatorVoteList(response.data.results[0].votes) 
    filterBills(response.data.results[0].votes) 
    filterNominations(response.data.results[0].votes)
  }

  const navigate = useNavigate()
    async function runGraphs() {
        navigate("/BarChart");
      }

  const filterNominations=(infopassed)=>{
    // console.log("InfoPassedToNom", infopassed)
    let nomList= infopassed.filter(svl => svl.nomination !== undefined)
    setSenatorNomVoteList(nomList)
    console.log(nomList)
  }
  
  const filterBills=(infoPassed)=>{
    // console.log("InfoPassedToBills", infopassed)
    let billsList= infoPassed.filter(svl => svl.bill.title !== null)
    setSenatorBillVoteList(billsList)
  }
  let location = useLocation()
 
  useEffect(() => {
    
    if (location.state.id !== undefined) {
      getSenatorVotingRecord(location.state);
      console.log("vote log", location.state.id)
 
    } else {
           
      console.log("Location data", location);
      //getSpecificBill(location.state);
    }
  }, []);
 


  return (
    <div>
      {/* <div>Most Recent Votes for {.senatorsVotes[0].member_id}</div> */}
      <div className="container">
       
   
       {location.state.id !== undefined ? 
          <div className="row">
         <div className="col-md-6"> 
           <BarChartBillsDisplayTable senatorBillVoteList={senatorBillVoteList} />
           </div>
            <div className="col-md-6">
              <BarChartNominationsDisplayTable senatorNomVoteList={senatorNomVoteList}/>
              </div>
              </div>
       
      :<div>error</div>}
    
      
    </div>
    </div>
  );
};

export default BarChart;
