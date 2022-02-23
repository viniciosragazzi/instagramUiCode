import React, {useState} from "react";
import { Link } from "react-router-dom";

const AppPage = () => {
  const userLogado = JSON.parse(localStorage.getItem("auth"))[0];
  const [nameUser, setNameUser] = useState(userLogado.name)
 const handleLogout = () =>{
  localStorage.setItem("auth",  JSON.stringify([{auth:false}]))
  setTimeout(()=>{
    document.location.reload(true);
  },1)
 }
  return (
    <div>
      <h1>Ola {nameUser}</h1>
    <Link to={'/'}><button onClick={handleLogout}>LogOut</button></Link>
    </div>
  );
};

export default AppPage;
