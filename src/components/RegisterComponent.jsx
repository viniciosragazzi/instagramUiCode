import React, { useState, useContext } from "react";
import { CustomerContext } from "../contexts/customer";
const LoginComponent = () => {
  const {regBtnFunc} =  useContext(CustomerContext);
  const [regBtn, setRegBtn] = useState(false)
  const {cadaster} =  useContext(CustomerContext);

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [generi, setGeneri] = useState('')
  const [dateNas, setDateNas] = useState('')


  const handleCadaster = (e) => {
    console.log(document.getElementById("form-register").reportValidity())
    e.preventDefault()
  
      const infosL =  [
        {
          name:name,
        lastname:lastname,
        email:email,
        password:password,
        generi:generi,
        dateNas:dateNas
        }
      ]
      cadaster(infosL)
    
  }

  const handleRegister = () => {
    setRegBtn(false)
    regBtnFunc({regBtn})
 }
  return (
    <div className="AuthComponent register">
      <div className="logo-area">
        <div className="logo">
          <div className="circle-1">
            <div className="circle-2"></div>
          </div>
        </div>
        <h2>Instagram</h2>
      </div>
      <form id="form-register" onSubmit={handleCadaster}>
        <div className="form-group">
          <input
          required
            type="text"
            name="name"
            id="nameForm"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
          required
            type="text"
            name="lastName"
            id="lastNameForm"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
        required
          type="email"
          name="Email"
          id="EmailFormRegister"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        required
          type="password"
          name="password"
          className="passwordForm"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-group options">
          <div className="option-area">
            <label for="cars">Gender</label>

            <select id="genders" onChange={(e) => setGeneri(e.target.value)}>
              <option value="masculine">Masculine</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
         <input
         required type="date" name="nasc-date" id="nasc-date" onChange={(e) => setDateNas(e.target.value)}/>
        </div>
        <button type="submit">Register</button>
      </form>
      <span className="registerSpan"  onClick={handleRegister}>Already have an account? Sign In</span>
    </div>
  );
};

export default LoginComponent;
