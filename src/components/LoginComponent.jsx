import React, { useState, useContext, useEffect } from "react";
import { CustomerContext } from "../contexts/customer";
import { useNavigate  } from "react-router-dom";
import {BsFacebook} from 'react-icons/bs'
const LoginComponent = () => {
    const {login} =  useContext(CustomerContext);
    const {regBtnFunc} =  useContext(CustomerContext);
    const [regBtn, setRegBtn] = useState(true)
    const [userInput, setUserInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const {authenticated} = useContext(CustomerContext)
    
    const navigate = useNavigate();
   
      
    const handleLogin = (e) => {
        e.preventDefault()

     
       
        login({userInput, passwordInput})
    }
   useEffect(() => {
            if(authenticated){
                navigate('/app');
            }
          });
    const handleRegister = () => {
       setRegBtn(true)
       regBtnFunc({regBtn})
    }
  return (
      <div className="AuthComponent login">
        <div className="logo-area">
          <div className="logo">
            <div className="circle-1">
            <div className="circle-2">
                
                </div>
            </div>
          </div>
          <h2>Instagram</h2>
        </div>
        <form onSubmit={handleLogin}>
            <input required type="text" name="user" id="userFormLogin" placeholder="Phone Number, Username, or Email"  value={userInput}
        onChange={(e) => setUserInput(e.target.value)}  />
            <input required type="password" name="password" id="passwordFormLogin" placeholder="Password" value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)} />
            <button type="submit">Login</button>
        </form>
        <div className="wraperLogin">
            <p>OR</p>
        </div>
        <button className="btnFacebook"><BsFacebook /> Login with Facebook</button>
        <span className="forgotPassword">Forgot Password</span>
        <div className="wraperP">

        </div>
        <span className="registerSpan" onClick={handleRegister}>Dont't have an account? Sign Up</span>
      </div>
  );
};

export default LoginComponent;
