import "./UserRegistration.css";
import { useNavigate } from "react-router";
import axios from "axios";
import UserRegistrationForm from "../DisplayComponents/UserRegistrationForm";

const RegistrationScreen = (props) => {
  let navigate = useNavigate();

  const registerUser = async (objectBeingPassedIn) => {
    console.log(objectBeingPassedIn)
    let newUser = {
      firstname: objectBeingPassedIn.firstName,
      lastname: objectBeingPassedIn.lastName,
      password: objectBeingPassedIn.password,
      username: objectBeingPassedIn.userName,
      email: objectBeingPassedIn.email,
      state: objectBeingPassedIn.state,
      zipcode: objectBeingPassedIn.zipcode,
      party: objectBeingPassedIn.party,
     
     };

    console.log(newUser)
    await axios.post("http://localhost:8000/api/auth/register/", newUser);
  };

  async function Register(formValues) {
    console.log(
      `from registration${formValues.firstName}+${formValues.state}+${formValues.party}`
    );
    registerUser(formValues);
    navigate("../login");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 text-center"></div>
        <div className="col-md-6 text-center">
          <UserRegistrationForm registerUser={Register} />
        </div>
        {/* </div> */}
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default RegistrationScreen;
