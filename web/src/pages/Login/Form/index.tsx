import React, { useState, /*useContext*/ } from 'react';
import { FiLock, FiUser, FiChevronDown } from "react-icons/fi";
import { InputGroup, InputGroupAddon, InputGroupText, Spinner } from "reactstrap";
import { Link /*useHistory*/ } from "react-router-dom";

import api from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";
import { Container, Input, Button } from './styles';

interface IData {
  username: string;
  password: string;
}

interface IResponse {
  username: string;
  password: string;
  token: string;
}

const Form: React.FC = () => {
  const [data, setData] = useState<IData>({username: "", password: ""});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  //const history = useHistory();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData({...data, [event.target?.name]: event.target?.value});
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setError(false);
      setLoading(true);

      const res = await api.post("/auth/user", data);
      const { has } = res.data;
      
      if (has) {
        signIn();
        setLoading(false);
        /*history.push("/");*/
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  }

  const valid = data.username.trim().length > 0 && data.password.trim().length > 0;

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {
          loading && <Spinner />
        }
        <br />
        <FiChevronDown height={150} width={150} />
        <h5>Login below</h5>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FiUser />
            </InputGroupText>
          </InputGroupAddon>
          <Input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleInputChange}
          maxLength="30"
          />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FiLock />
            </InputGroupText>
          </InputGroupAddon>
          <Input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleInputChange}
          maxLength="60"
          />
        </InputGroup>
        <br />
        <Button {...(valid || {disabled: true})}>Login</Button>
        {
          error && <p className="text-danger">User not found</p>
        }
      </form>
      <p>Not an user ? <Link to="/register">Register</Link> here</p>
    </Container>
  )
}

export default Form;