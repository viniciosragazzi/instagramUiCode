import React, {useContext, useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import AppPage from "./pages/AppPage";
import {CustomerContext} from './contexts/customer'

const AppRoutes = () => {
    const {authenticated} =  useContext(CustomerContext);
   
    const [auth, setAuth] = useState(authenticated)

    useEffect(() => {
        setAuth(authenticated)

    }, [authenticated])
    
  return (
    <Router>
      <Routes>
        {auth === false ? <Route path="/" element={<LoginPage />}></Route>:
        
        <Route exact path="/app" element={<AppPage />}></Route>}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
