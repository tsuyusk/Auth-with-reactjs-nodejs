import React from 'react';
import Message from './Message';
import Form from './Form';
import { Container } from './styles';

interface IProps {
  handleAuth(): void;
}

const Login: React.FC<IProps> = ({ handleAuth }) => {
  return (
    <Container>
      <Message />
      <Form handleAuth={handleAuth} />
    </Container>
  )
}

export default Login;