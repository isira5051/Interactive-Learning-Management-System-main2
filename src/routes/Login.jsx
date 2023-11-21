import React, { useState } from "react";
import "./Css/Login.css";
import Navbar from "../components/Home/Navbar";
import heroImage7 from "../assests/hero11.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");
  const [userNameExistMessage, setUserNameExistMessage] = useState("");
  const [emailExistMessage, setEmailExistMessage] = useState("");
  const [emailPasswordIncorrectMeasseage, setemailPasswordIncorrectMeasseage] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    role: "reader",
    email: "",
    password: "",
  });

  const formData = { ...values, mode: action }
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  axios.defaults.withCredentials = true;


  const isAlphanumeric = (input) => /^[0-9]+$/.test(input) && input.length > 0;
  const handleSubmit = async (event) => {


    event.preventDefault();

    setUserNameExistMessage("");
    setEmailExistMessage("");
    setemailPasswordIncorrectMeasseage("");
    setUsernameErrorMessage("");
    console.log(values.name);
    if (isAlphanumeric(values.name)) {
      console.log('yo');
      setUsernameErrorMessage("Username must be alphanumeric and contain only letters and numbers");
      return;
    }
    if (action === "Sign Up") {
      event.preventDefault();
      await axios.post("https://server-w9pr.onrender.com/login", formData)
        .then(response => {
          // if(response.data.nameExist){
          //   alert("UserName exist")
          // }else if(response.data.emailExist){
          //   alert("email exist")
          if (response.data.nameExist) {
            setUserNameExistMessage("Username already exists");
          } else if (response.data.emailExist) {
            setEmailExistMessage("Email already exists");
          } else {
            navigate('/user')
          }
        })
        .catch((error) => {
          console.log(error)
        });
    }
    else {
      event.preventDefault();
      axios.post("https://server-w9pr.onrender.com/login", formData)
        .then(response => {

          if (response.data.Login) {
            const route = response.data.route;
            console.log(route)
            navigate(route)
          } else {
            //alert("No record")
            setemailPasswordIncorrectMeasseage("Incorrect Username or Password");
          }
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="container1">
          <div className="left">
            <img
              className="background-image"
              src={heroImage7}
              alt="Background"
            />
          </div>
          <div className="right">
            <div className="form-box">
              <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
              </div>
              <div className="inputs">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    onChange={handleInput}
                    required
                  />
                </div>
                {action === "Sign Up" && (
                  <div className="input">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleInput}
                      required
                    />
                  </div>
                )}

                <div className="input">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              {userNameExistMessage && <div className="errorMsg">{userNameExistMessage}</div>}
              {emailExistMessage && <div className="errorMsg">{emailExistMessage}</div>}
              {emailPasswordIncorrectMeasseage && <div className="errorMsg">{emailPasswordIncorrectMeasseage}</div>}
              {usernameErrorMessage && <div className="errorMsg">{usernameErrorMessage}</div>}
              <div className="submit-container">
                <button
                  className={action === "Login" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Sign Up");
                  }}
                  type="submit"
                >
                  Sign Up
                </button>
                <button
                  className={action === "Sign Up" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Login");
                  }}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

        </div>
      </form>

    </>
  );
};

export default Login;
