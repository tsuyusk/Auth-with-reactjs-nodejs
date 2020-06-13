import React from 'react';
import { RouteProps } from "react-router-dom";

import Message from "./Message";
import { Container } from './styles';
import Form from './Form';

const Register: React.FC<RouteProps> = ({ location }) => {
  return (
    <Container>
      <Message />
      <Form location={location} />
    </Container>
  )
}

export default Register;