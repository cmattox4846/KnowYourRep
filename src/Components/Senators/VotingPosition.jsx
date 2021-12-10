import React, { useEffect, useState} from 'react';
import "./VotingPosition.css"
import axios from "axios";
import VotingPositionSearch from "../DisplayComponents/VotingPositionSearch";
import VotingPositionDisplayTable from '../DisplayComponents/VotingPositionDisplayTable';
import { propublicakey } from '../../keys';

const VotingPosition = () => {
  
  const [senatorVoteList, setSenatorVoteList] = useState([])

  

  const getSenatorVotingRecord = async (objectfromform) => {
    let memberId = objectfromform.id
    let response = await axios.get(`https://api.propublica.org/congress/v1/members/${memberId}/votes.json`, { headers: {"X-API-Key": propublicakey}})
    console.log("These are the Senators votes from API " , response.data.results[0].votes)
    setSenatorVoteList(response.data.results[0].votes)  
  }

  async function VotingSearch(formValues) {
    getSenatorVotingRecord(formValues);
  }
 

  return (
    <div className="container">
        <div className="row">
         
            <div className="col-2"></div>
            <div className="col-8">
                     <VotingPositionSearch VotingSearch={VotingSearch}/>      
               
              </div>
              <div className="col-2"></div>
            
          
              <VotingPositionDisplayTable senatorsVotes={senatorVoteList}/>
        
   
     
    </div>
    </div>
  );
};

export default VotingPosition;
