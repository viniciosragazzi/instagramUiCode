import React, {useContext} from "react";

import { CustomerContext } from "../../contexts/customer";
import AuthPageArea from "./style";
import RegisterComponent from '../../components/RegisterComponent'
import LoginComponent from '../../components/LoginComponent'

const LoginPage = () => {
  const {regBtn} =  useContext(CustomerContext);
  return (
    <AuthPageArea>
      {regBtn === false ? <LoginComponent /> :  <RegisterComponent />}
    </AuthPageArea>
  );
};

export default LoginPage;
