import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Container
} from './style';
import Button from "../../../../components/Button/Button";
import useLocalStorage from '../../../../utils/useLocalStorage';


const LoginPage = function (props) {
  const [session, setSession] = useLocalStorage('session', '');
  let history = useHistory();
  const handleOnClick = () => {
      setSession('');
      history.push("/login");
  };
  return (
    <Container>
      <Button
        buttonText="Logout"
        width={200}
        marginTop={4}
        onClick={handleOnClick}
      />
    </Container>
  )
};
export default LoginPage;
