import React, { useState } from "react";
import NavBar from "../../Components/Home/nav_bar";
import HomeHeader from "../../Components/Home/home_header";
import Footter from "../../Components/Home/footter";
import "../../Css/Client/registration.css";
import axios from "axios";
import LoginImage from "../../Assets/reg.png";
import { useNavigate } from "react-router";
import validator from "validator";
import DOMPurify from "dompurify";

function Regitstration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setContry] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const submitHandler = () => {

    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
      return;
    }

    const passwordRegex = /^[a-zA-Z0-9\s]+$/;
    if (passwordRegex.test(password)) {
      alert("Please enter a valid password (use special charactors)");
      return;
    }

    // Email validation using validator library
    if (!validator.isEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    // Whitelist validation for country: allow specific country codes (e.g., IN, US, SL)
    const allowedCountryCodes = ["IN", "US", "SL", "NZ", "UK", "Ausi", "Can", "France", "Japan", "Rus", "Italy"];
    if (!allowedCountryCodes.includes(country)) {
      alert("Please select a valid country.");
      return;
    }
    
    const escapedName = encodeURIComponent(name);
    const escapedEmail = encodeURIComponent(email);
    const escapedCountry = encodeURIComponent(country);
    const escapedPassword = encodeURIComponent(password);

    const data = {
     name: escapedName,
     email: escapedEmail,
     country: escapedCountry,
     password: escapedPassword
    };
     // Sanitize data
     const sanitizedData = DOMPurify.sanitize(JSON.stringify(data));


     axios
     .post("http://localhost:8000/user/data/save", sanitizedData, {
       headers: {
         "Content-Type": "application/json"
       }
     })
     .then((res) => {
       navigation("/");
       alert(res.data.message);
     })
     .catch((err) => {
       console.error("Error submitting data:", err);
       alert("An error occurred while submitting the data.");
     });
 };

  return (
    <div className="site-main-container">
      <div>
        <NavBar />
      </div>
      <div className="site-body-container">
        <div>
          <HomeHeader />
        </div>

        <div className="site-details-wrapper clearfix">
          {/* body start */}
          <div className="reg-container">
            <div className="reg-container-left-wrapper">
              <img src={LoginImage} width="390px" alt="Login" />
            </div>
            <div className="reg-container-right-wrapper">
              <h3>Create Your Account!!!</h3>
              <br />

              <input
                type="text"
                placeholder="Please Enter Your Name..."
                className="input-fields"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <input
                type="email"
                placeholder="Please Enter Your Email..."
                className="input-fields"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <select
                className="input-fields"
                onChange={(e) => {
                  setContry(e.target.value);
                }}
              >
                <option value="none">Select Your Country...</option>
                <option value="IN">India</option>
                <option value="US">America</option>
                <option value="SL">Sri-Lanka</option>
                <option value="NZ">New Zealand</option>
                <option value="UK">UK</option>
                <option value="Ausi">Australia</option>
                <option value="Can">Canada</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="Rus">Russia</option>
                <option value="Italy">Italy</option>
              </select>
              <br />
              <input
                type="password"
                placeholder="Please Enter Your Password..."
                className="input-fields"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <br />
              <button className="reg-btn" onClick={submitHandler}>
                SIGN-UP
              </button>
            </div>
          </div>

          {/* body end */}
        </div>
        <Footter />
      </div>
    </div>
  );
}

export default Regitstration;

