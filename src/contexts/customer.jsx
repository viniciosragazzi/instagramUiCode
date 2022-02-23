import { useState, createContext} from "react";


//Cria Um contexto a ser trabalhado
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [regBtn, setRegBtn] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  window.onload = function() {

    if(JSON.parse(localStorage.getItem("auth")) === null){
      localStorage.setItem("auth",  JSON.stringify([{auth:false}]))
    }
    console.log(JSON.parse(localStorage.getItem("auth"))[0].auth)
    return setAuthenticated(JSON.parse(localStorage.getItem("auth"))[0].auth)
  };

  const handleLogin = ({ userInput, passwordInput }) => {
    setUserInput(userInput);
    setPasswordInput(passwordInput);
    const users = JSON.parse(localStorage.getItem("users")) ?? [];
 
   
    users.forEach((user, index) => {
      if (userInput === user.email && passwordInput === user.password) {
        localStorage.setItem("auth", JSON.stringify([{auth:true, name:user.name, email: user.email}]))
        return setAuthenticated(JSON.parse(localStorage.getItem("auth"))[0].auth);
      } else {
        localStorage.setItem("auth",  JSON.stringify([{auth:false}]))
        return setAuthenticated(JSON.parse(localStorage.getItem("auth"))[0].auth);
      }
    });   
  };


  const handleCadaster = (infosL) => {
    const users = JSON.parse(localStorage.getItem("users")) ?? [];
    users.push(infosL[0]);
    localStorage.setItem("users", JSON.stringify(users));
    document.location.reload(true);
  };

  const handleRegister = ({ regBtn }) => {
    setRegBtn(regBtn);
  };
  return (
    <CustomerContext.Provider
      value={{
        userInput,
        passwordInput,
        regBtn,
        authenticated,
        login: handleLogin,
        regBtnFunc: handleRegister,
        cadaster: handleCadaster,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
