import React from 'react';
import Message from './Message';
import Form from './Form';
import { Container } from './styles';


const Login: React.FC = () => {
  return (
    <Container>
      <Message />
      <Form />
    </Container>
  )
}

export default Login;