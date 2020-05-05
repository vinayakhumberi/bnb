import React from 'react';
import {
  Container
} from './styles/style';
import LoginCard from './aggregates/LoginCard/LoginCard';

const LoginPage = function (props) {

  return (
    <Container>
      <LoginCard />
    </Container>
  )
};
export default LoginPage;
