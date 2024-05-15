import React, { useState } from "react";
import "./loginSignup.css";
import userIcon from "../Assets/icons/person icon.png";
import passwordIcon from "../Assets/icons/password icon.png";
import emailIcon from "../Assets/icons/email icon.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Log In" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={userIcon} alt="User Icon" />
              <input type="text" placeholder="Username" />
            </div>
          )}

          <div className="input">
            <img src={emailIcon} alt="Email Icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input">
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
      {action === "Log In" ? (
        <div className="forgot-password">
          Lost Password ? <span>Click Here!</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="submit-container">
        <div
          className={action === "Log In" ? "submit gray" : "submit "}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Log In");
          }}
        >
          Log In
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
