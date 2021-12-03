import React, { useEffect, useState} from 'react';
// import HomePage from './components/HomePage/HomePage';
import LoginScreen from './Login/Login';
import axios from 'axios';
import { propublicakey } from '../keys';
import RegistrationScreen from './UserRegistration/UserRegistration';
// import ProfilePage from './components/ProfilePage/ProfilePage';
import jwtDecode from 'jwt-decode'
// import DetailTable from './components/ProductDetail/ProductDetail';
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link,Outlet} from 'react-router-dom'
import Nav from "./Nav/Nav.jsx"
import ProfilePage from './Profile/Profile';
import SenatorsPage from './Senators/Senators';

function App() {
const [tokenInfo, setTokenInfo] = useState({})
const [noteList, setNoteList] = useState({})
const [userInfo, setUserInfo] = useState({})
const [senatorList, setSenatorList] = useState([])
const [senatorVoteList, setSenatorVoteList] = useState([])
const [senatorByState, setSenatorByState] = useState([])
const [senatorInfo, setSenatorInfo] = useState([])
const [specficSenator, setSpecificSenator] = useState([])

//Get user login

const loginUser = async (loginUser) => {
let response= await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
localStorage.setItem('token', response.data.access);
//console.log("response axios call", response.data)
getUserJWT();
}

const getUserJWT = () => {
  const jwt = localStorage.getItem('token');
  try {
    const info = jwtDecode(jwt);
    setTokenInfo(info)
    getUserProfile()
   // setLoadData(!loadData)
    console.log("get info from jwt call", info)
    //console.log(jwt)
  } catch (error) {
    console.log("Error in decoding JWT token: ", error)
    setTokenInfo({})
    
  }


}
const getUserProfile = async () => {
  const jwt = localStorage.getItem('token');
  //console.log("This is the UserID " + tokenInfo.user_id)
  console.log("This is the all token info " + tokenInfo)
  let response = await axios.get(`http://127.0.0.1:8000/profile/3/`, { headers: {Authorization: 'Bearer ' + jwt}})
 // let response = await axios.get(`http://127.0.0.1:8000/profile/${tokenInfo.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}})
  console.log("This is the profile from API " + response.data)
  setUserInfo(response.data) 
  getCurrentSenators() 
}

const logOut = ()=>{
  localStorage.removeItem("token");
  setTokenInfo({})
  console.log("logged user out")
}
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
// get all products
const getNotes = async () => {
  const jwt = localStorage.getItem('token');
  let response = await axios.get('https://127.0.0.1:8000/note', { headers: {Authorization: 'Bearer ' + jwt}})
  console.log("These are the Notes from API " + response.data)
  setNoteList(response.data)  
}

const getCurrentSenators= async () => {
  
  let response = await axios.get('https://api.propublica.org/congress/v1/117/senate/members.json', { headers: {"X-API-Key": propublicakey}})
  console.log(response)
  console.log("These are the Senators from API ", response.data.results[0].members)
  setSenatorList(response.data.results[0].members)
  console.log("This is the state variable senatorList "+ {senatorList})
  filterSenators()
  
}

const filterSenators=()=>{
 
    const senator = senatorList.filter(state => state.state === userInfo.state)
    console.log(senator)
    setSenatorByState(senator)
}

const getSenatorVotingRecord= async () => {
 
  let response = await axios.get('https://api.propublica.org/congress/v1/members/{member-id}/votes.json', { headers: {"X-API-Key": propublicakey}})
  console.log("These are the Senators votesfrom API " + response.results.votes)
  setSenatorVoteList(response.results.votes)  
}
const getAllBills= async () => {
  
  let response = await axios.get('https://api.propublica.org/congress/v1/members/{member-id}/votes.json', { headers: {"X-API-Key": propublicakey}})
  console.log("These are the Senators votesfrom API " + response.results.votes)
  setSenatorVoteList(response.results.votes)  
}
const getSpecificBill= async () => {
 
  let response = await axios.get('https://api.propublica.org/congress/v1/members/{member-id}/votes.json', { headers: {"X-API-Key": propublicakey}})
  console.log("These are the Senators votesfrom API " + response.results.votes)
  setSenatorVoteList(response.results.votes)  
}

// const getSpecificSenator= async (obj) => {
 
//   let response = await axios.get(`https://api.propublica.org/congress/v1/members/${objectpassed.id}.json`, { headers: {"X-API-Key": propublicakey}})
//   console.log("These are the Senators votesfrom API " + response.results.votes)
//   setSenatorVoteList(response.results.votes)  

// }
const getCommittee= async (objectpassed) => {
 console.log(objectpassed)
  let response = await axios.get(`https://api.propublica.org/congress/v1/members/${objectpassed.id}.json`, { headers: {"X-API-Key": propublicakey}})
  console.log("These are the Senators committees" , response.data.results[0].roles[0].committees)
  setSenatorInfo(response.data.results[0].roles[0].committees)
  setSpecificSenator(response.data.results[0])  
}
  return (

    
      <div className="background">
        <Router>
          <Nav logoutUser={logOut}/>
          <Routes>
            <Route path="/Profile" element={<ProfilePage user={userInfo} senators={senatorByState}/>}/>
            <Route path="/Login" element={<LoginScreen loginUserCall={loginUser} registerUser={registerUser} />} />        
            <Route path="/UserRegistration" element={<RegistrationScreen registerUser={registerUser} />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/Senators" element={<SenatorsPage senator={specficSenator} senatorInfo={senatorInfo} getCommittee={getCommittee}/>} 
              // <Route path="/Senators" element={<SenatorsPage senators={senatorList} senatorInfo={senatorInfo}/>}
            />
          </Routes>
        </Router> 
    </div>
  );
}

export default App;
