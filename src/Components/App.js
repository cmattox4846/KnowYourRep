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
import SenatorByState from './Senators/SenatorByState';
import VotingPosition from './Senators/VotingPosition';
import BarChart from './BarChart/BarChart';
import BillsSearch from './Bills/Bills';
import SenatorScreen from './Senators/Senators';

function App() {
const [tokenInfo, setTokenInfo] = useState({})
const [noteList, setNoteList] = useState({})
const [userInfo, setUserInfo] = useState({})
const [senatorList, setSenatorList] = useState([])
const [senatorVoteList, setSenatorVoteList] = useState([])
const [senatorByState, setSenatorByState] = useState([])
const [senatorByStateInput, setSenatorByStateInput] = useState([])
const [senatorInfo, setSenatorInfo] = useState([])
const [specficSenator, setSpecificSenator] = useState([])
const [senatorLoad, setSenatorLoad] = useState(false)
const [billInfo, setbillInfo] = useState([])



useEffect(()=>{
getCurrentSenators()
},[])

useEffect(()=>{
 
  },[])
  

//Get user login

  async function loginUser(loginUser) {
    let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
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
  const id = tokenInfo.user_id
  console.log("This is the UserID " , tokenInfo.user_id)
  // console.log("This is the all token info " , tokenInfo)
  let response = await axios.get(`http://127.0.0.1:8000/profile/${id}/`, { headers: {Authorization: 'Bearer ' + jwt}})
 // let response = await axios.get(`http://127.0.0.1:8000/profile/${tokenInfo.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}})
  console.log("This is the profile from API " , response.data)
  setUserInfo(response.data) 
  // senatorLoad(true)
}

// const logOut = ()=>{
//   localStorage.removeItem("token");
//   setTokenInfo({})
//   console.log("logged user out")
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
  filterSenatorsOnProfile()
  
  
}

const filterSenatorsOnProfile=()=>{
  console.log("userInfo", userInfo)
    const senator = senatorList.filter(sl => sl.state === userInfo.state)
    console.log("filterSenatorsOnProfile", senator)
    setSenatorByState(senator)
}

const filterSenators=(objectpassed)=>{
 setSenatorLoad(!senatorLoad)
 console.log("object passed", objectpassed)
 console.log(senatorList)
  const senator = senatorList.filter(state => state.state === objectpassed.state)
  console.log("this is the array senator", senator)
  setSenatorByStateInput(senator)
}

const getSenatorVotingRecord= async (objectfromform) => {
  let memberId = objectfromform.id
  let response = await axios.get(`https://api.propublica.org/congress/v1/members/${memberId}/votes.json`, { headers: {"X-API-Key": propublicakey}})
  console.log("These are the Senators votes from API " , response.data.results[0].votes)
  setSenatorVoteList(response.data.results[0].votes)  
}
const getAllBills= async () => {
  
  let response = await axios.get('https://api.propublica.org/congress/v1/members/{member-id}/votes.json', { headers: {"X-API-Key": propublicakey}})
  console.log("These are the Senators votesfrom API " , response.results.votes)
  setSenatorVoteList(response.results.votes)  
}


const getSpecificBill= async (objectpassed) => {
  const id = objectpassed.bill_id
  console.log("Bill Id ", objectpassed.bill_id)
  let response = await axios.get(`https://api.propublica.org/congress/v1/117/bills/${id}.json`, { headers: {"X-API-Key": propublicakey}})
  console.log("Specific Bill " , response.data.results[0])
  setbillInfo(response.data.results[0])  
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

    <Router>
      <div className="background">
        
          <Nav  />
          <Routes>
            <Route path="/Profile" element={<ProfilePage user={userInfo} senators={senatorByState} />}/>
            <Route path="/Login" element={<LoginScreen loginUserCall={loginUser} registerUser={registerUser} />} />        
            <Route path="/UserRegistration" element={<RegistrationScreen registerUser={registerUser} />} />
            <Route path="/SenatorsByState" element={<SenatorByState senatorByStateInput={senatorByStateInput} filteredSenator={filterSenators} />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/Senators" element={<SenatorScreen senator={senatorByState} specificSenator={specficSenator}senatorInfo={senatorInfo}  getCommittee={getCommittee}/>}> 

              {/* <Route path="/" element={<SenatorByState senatorByStateInput={senatorByStateInput} filteredSenator={filterSenators} />} /> */}
            </Route>
            <Route path="VotingPosition" element={<VotingPosition senator={senatorByState} senatorInfo={senatorInfo} senatorsVotes={senatorVoteList}  getVotingPosition={getSenatorVotingRecord}/>}/> 
            <Route path="BarChart" element={<BarChart senatorsVotes={senatorVoteList} getBills={getSpecificBill}/>} />
            <Route path="Bills" element={<BillsSearch billInfo={billInfo} getBills={getSpecificBill} />} />
          </Routes>
          
       
    </div>
    </Router> 
  );
}

export default App;
