import React, { useEffect, useState} from 'react';
import "./VotingPosition.css"
import axios from "axios";
import VotingPositionSearch from "../DisplayComponents/VotingPositionSearch";
import VotingPositionBillsTable from '../DisplayComponents/VotingPositionBillsTable';
import { propublicakey } from '../../keys';
import VotingPoistionNominationTable from '../DisplayComponents/VotingPositionNominationTable';
import { useLocation,useNavigate } from 'react-router';
import { Link } from "react-router-dom";

const VotingPosition = () => {
  
  const [senatorVoteList, setSenatorVoteList] = useState([])
  const [senatorNomVoteList, setSenatorNomVoteList] = useState([])
  const [senatorBillVoteList, setSenatorBillVoteList] = useState([])
  

  const getSenatorVotingRecord = async (objectfromform) => {
    let memberId = objectfromform.id
    let response = await axios.get(`https://api.propublica.org/congress/v1/members/${memberId}/votes.json`, { headers: {"X-API-Key": propublicakey}})
    // console.log("These are the Senators votes from API " , response.data.results[0].votes)
    setSenatorVoteList(response.data.results[0].votes) 
    filterBills(response.data.results[0].votes) 
    filterNominations(response.data.results[0].votes)
  }


  
  const filterNominations=(infopassed)=>{
    // console.log("InfoPassedToNom", infopassed)
    let nomList= infopassed.filter(svl => svl.nomination !== undefined)
    setSenatorNomVoteList(nomList)
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
      
    }
  }, []);
 

  return (
    <div className="container">
        <div className="row">
          
         
            <div className="col-2"></div>
            <div className="col-8">
                     {/* <VotingPositionSearch VotingSearch={VotingSearch}/>       */}
               
              </div>
              <div className="col-2"></div>
            
          
          {senatorVoteList.length !== 0
          ?
          <div>
            <div><Link to="/BarChart"state={{id: location.state.id}}> See Graphs of Voting Position</Link></div>
            {/* {senatorVoteList.bill.title !== null? */}
              <VotingPositionBillsTable senatorsVotes={senatorBillVoteList}/>
              {/* :<div></div>} */}

             

              <VotingPoistionNominationTable senatorsVotes={senatorNomVoteList}/>
              </div>
          : <div></div>}
   
     
    </div>
    </div>
  );
};

export default VotingPosition;
