import React, { useEffect, useState} from 'react';
import LoginScreen from './Login/Login';
import axios from 'axios';

import RegistrationScreen from './UserRegistration/UserRegistration';
import jwtDecode from 'jwt-decode';
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link,Outlet} from 'react-router-dom'
import Nav from "./Nav/Nav.jsx"
import ProfilePage from './Profile/Profile';
import SenatorByState from './Senators/SenatorByState';
import VotingPosition from './Senators/VotingPosition';
import BarChart from './BarChart/BarChart';
import BillsSearch from './Bills/Bills';
import SenatorScreen from './Senators/Senators';
import BillByDate from './Bills/BillByDate';
import { propublicakey } from '../keys';

function App() {

//const [noteList, setNoteList] = useState({})
const [userInfo, setUserInfo] = useState({})
const [senatorList, setSenatorList] = useState([])


const [senatorByStateInput, setSenatorByStateInput] = useState([])
const [senatorInfo, setSenatorInfo] = useState([])
const [specficSenator, setSpecificSenator] = useState([])
const [senatorLoad, setSenatorLoad] = useState(false)
const [logoutStatus, setlogoutStatus] = useState(false)







useEffect(()=>{
getCurrentSenators()
},[])



useEffect(()=>{
  //force refresh for logout
},[logoutStatus])



  





// const logOut = ()=>{
//   localStorage.removeItem("token");
//   setTokenInfo({})
//   console.log("logged user out")
//   setlogoutStatus(true)
// }
//register user
const registerUser = async (objectBeingPassedIn) => {

  let newUser = {
      first_name: objectBeingPassedIn.firstName,
      last_name: objectBeingPassedIn.lastName,
      password: objectBeingPassedIn.password,
      username: objectBeingPassedIn.userName,
      email: objectBeingPassedIn.email,
      state: objectBeingPassedIn.state,
      zip_code:objectBeingPassedIn.zip_code,
      party:objectBeingPassedIn.party

  }

  await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser)
}

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



const filterSenators=(objectpassed)=>{
 setSenatorLoad(!senatorLoad)
 console.log("object passed", objectpassed)
 console.log(senatorList)
  const senator = senatorList.filter(state => state.state === objectpassed.state)
  console.log("this is the array senator", senator)
  setSenatorByStateInput(senator)
}
  return (

    <Router>
      <div className="background">
        
          <Nav   />
          
          <Routes>
            <Route path="/Profile" element={<ProfilePage senatorList={senatorList} />}/>
            <Route path="/Login" element={<LoginScreen  registerUser={registerUser} />} />        
            <Route path="/UserRegistration" element={<RegistrationScreen registerUser={registerUser} />} />
            <Route path="/SenatorsByState" element={<SenatorByState senatorByStateInput={senatorByStateInput} filteredSenator={filterSenators} />} />
            <Route path="/updateProfileFrom" element={<RegistrationScreen registerUser={registerUser} />} />
            <Route path="/Senators" element={<SenatorScreen specificSenator={specficSenator}senatorInfo={senatorInfo}  />}/> 
            <Route path="VotingPosition" element={<VotingPosition />}/> 
            <Route path="BarChart" element={<BarChart />} />
            <Route path="/Bills" element={<BillsSearch  />} />
            <Route path="BillByDate" element={<BillByDate />} />

          </Routes>
         
       
    </div>
    
    {/* <Footer /> */}
    
    </Router> 
  );
}

export default App;
