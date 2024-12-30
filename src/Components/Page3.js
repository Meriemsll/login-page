import React, { useState } from 'react';
import './app.css';
import persone from './assets/persone.png';
import password from './assets/password.png';
import email from './assets/email.png';

function Page3() {
  
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [action, setAction] = useState("Sign Up");

  const handleSubmit = () => {
    console.log("Action:", action);
    console.log("Email Address:", emailAddress);
    console.log("Password:", passwordValue);

    if (action === "Sign Up") {
      console.log("Name:", name);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        <div>
          <div className="inputs">
            {action === "Sign Up" && (
              <div className="input">
                <img src={persone} alt="user-icon" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
            )}
            <div className="input">
              <img src={email} alt="email-icon" />
              <input
                type="email"
                placeholder="Email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)} 
              />
            </div>
            <div className="input">
              <img src={password} alt="password-icon" />
              <input
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)} 
              />
            </div>
          </div>
        </div>
        {action === "Login" && (
          <div className="forgot-password">
            Forgot password? <span>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit purple" : "submit gray"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Login" ? "submit purple" : "submit gray"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
        <div
          className="submit"
          onClick={handleSubmit}
          style={{ marginTop: "20px" }}
        >
          Submit
        </div>
      </div>
    </div>
  );
}

export default Page3;
