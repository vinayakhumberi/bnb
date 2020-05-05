import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Container
} from './style';
import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
import Button from "../../../../components/Button/Button";
import useLocalStorage from '../../../../utils/useLocalStorage';


const LoginPage = function (props) {
  const [session, setSession] = useLocalStorage('session', '');
  let history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleSetEmail = (inData) => {
    setData(data => ({
      ...data,
      email: inData.status ? inData.value : ""
    }));
  };
  const handleSetPassword = (inData) => {
    setData(data => ({
      ...data,
      password: inData.status ? inData.value : ""
    }));
  };
  const handleOnClick = () => {
    if (data.email !== "" && data.password !== "") {
    // route to image display page
    // set localStorage
      setSession(data.email);
      history.push("/home");
    }
  };
  return (
    <Container>
      <EmailField
         updateEmail={handleSetEmail}
      />
      <PasswordField
        updatePassword={handleSetPassword}
      />
      <Button
        buttonText="Login"
        width="100%"
        marginTop={4}
        isDisabled={data.email === "" || data.password === ""}
        onClick={handleOnClick}
      />
    </Container>
  )
};
export default LoginPage;
