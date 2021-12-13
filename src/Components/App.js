import React, { useEffect, useState} from 'react';
import LoginScreen from './Login/Login';
import axios from 'axios';

import RegistrationScreen from './UserRegistration/UserRegistration';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Nav from "./Nav/Nav.jsx"
import ProfilePage from './Profile/Profile';
import SenatorByState from './Senators/SenatorByState';
import VotingPosition from './Senators/VotingPosition';
import BarChart from './BarChart/BarChart';
import BillsSearch from './Bills/Bills';
import SenatorScreen from './Senators/Senators';
import BillByDate from './Bills/BillByDate';
import { propublicakey } from '../keys';
import HomePage from './HomePage/HomePage';

function App() {
//const [noteList, setNoteList] = useState({})
const [senatorList, setSenatorList] = useState([])
const [logoutStatus, setlogoutStatus] = useState(false)

useEffect(()=>{
getCurrentSenators()
},[])



useEffect(()=>{
  //force refresh for logout
},[logoutStatus])



  





 // edit user api for future release
// const editUser = async (objectBeingPassedIn) => {
//  let id = tokenInfo.user_id
//   let updatedUser = {
//       first_name: objectBeingPassedIn.firstName,
//       last_name: objectBeingPassedIn.lastName,
//       password: objectBeingPassedIn.password,
//       username: objectBeingPassedIn.userName,
//       email: objectBeingPassedIn.email,
//       state: objectBeingPassedIn.state,
//       zip_code:objectBeingPassedIn.zip_code,
//       party:objectBeingPassedIn.party
//   }
//   await axios.put(`http://127.0.0.1:8000/profile/${id}/`, updatedUser)
//}

  // get notes api for future release
// }
// const getNotes = async () => {
//   const jwt = localStorage.getItem('token');
//   let response = await axios.get('https://127.0.0.1:8000/note', { headers: {Authorization: 'Bearer ' + jwt}})
//   console.log("These are the Notes from API " + response.data)
//   setNoteList(response.data)  
// }

const getCurrentSenators= async () => {
  
  let response = await axios.get('https://api.propublica.org/congress/v1/117/senate/members.json', { headers: {"X-API-Key": propublicakey}})
  console.log(response)
  console.log("These are the Senators from API ", response.data.results[0].members)
  setSenatorList(response.data.results[0].members)
  console.log("This is the state variable senatorList ", {senatorList})
  // filterSenatorsOnProfile(userInfo)
}




  return (

    <Router>
      <div className="background">
        
          <Nav  setlogoutStatus={setlogoutStatus} />
          
          <Routes>
            <Route path="/Profile" element={<ProfilePage senatorList={senatorList} />}/>
            <Route path="/Login" element={<LoginScreen  />} />        
            <Route path="/UserRegistration" element={<RegistrationScreen />} />
            <Route path="/SenatorsByState" element={<SenatorByState senatorList={senatorList} />} />
            <Route path="/updateProfileFrom" element={<RegistrationScreen  />} />
            <Route path="/Senators" element={<SenatorScreen   />}/> 
            <Route path="VotingPosition" element={<VotingPosition />}/> 
            <Route path="BarChart" element={<BarChart />} />
            <Route path="/Bills" element={<BillsSearch  />} />
            <Route path="BillByDate" element={<BillByDate />} />
            <Route path="/" element={<HomePage/>}/>

          </Routes>
         
       
    </div>
    
    {/* <Footer /> */}
    
    </Router> 
  );
}

export default App;
