import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "./Profile.css";
import ProfileSenatorsTable from "../DisplayComponents/ProfileSenatorsTable";
import ProfileUserTable from "../DisplayComponents/ProfileUserTable";

const ProfilePage = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [senatorByState, setSenatorByState] = useState([]);
  const [tokenInfo, setTokenInfo] = useState({});

  const getUserJWT = () => {
    const jwt = localStorage.getItem("token");
    try {
      const info = jwtDecode(jwt);
      console.log("get info from jwt call", info);
      getUserProfile(info);
      setTokenInfo(info);
    } catch (error) {
      console.log("Error in decoding JWT token: ", error);
      setTokenInfo({});
    }
  };

  const getUserProfile = async (tokenInfo) => {
    const jwt = localStorage.getItem("token");
    const id = tokenInfo.user_id;
    // console.log("This is the UserID " , tokenInfo.user_id)
    let response = await axios.get(`http://127.0.0.1:8000/profile/${id}/`, {
      headers: { Authorization: "Bearer " + jwt },
    });
    // console.log("This is the profile from API " , response.data)
    setUserInfo(response.data);
    filterSenatorsOnProfile(response.data);
  };

  const filterSenatorsOnProfile = (userinfo) => {
    const senator = props.senatorList.filter(
      (sl) => sl.state === userinfo.state
    );
    setSenatorByState(senator);
  };

  useEffect(() => {
    getUserJWT();
  }, []);

  return (
    <div>
      {console.log("ByState", senatorByState)}
      {console.log(userInfo)}
      {senatorByState[0] != null ? (
        <div>
          <div className="container">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ProfileUserTable user={userInfo} />
            </div>
            <div className="col-md-3"> </div>
          </div>
          <div className="container">
            <ProfileSenatorsTable user={userInfo} senators={senatorByState} />

            <div className="col-md-2"></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProfilePage;
