import React, { useState } from 'react';
import { FiLock, FiUser, FiChevronDown } from "react-icons/fi";
import { InputGroup, InputGroupAddon, InputGroupText, Spinner } from "reactstrap";
import { Link, RouteProps } from "react-router-dom";

import api from "../../../services/api";
import { Container, Input, Button } from './styles';

interface IData {
  username: string;
  password: string;
  confirmPassword: string;
}

const Form: React.FC<RouteProps> = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [data, setData] = useState<IData>({username: "", password: "", confirmPassword: ""});
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setData({...data, [event.target.name]: event.target.value});
  };
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault(); 
      setLoading(true);
      setSucess(false);
      const { username, password } = data;
      
      await api.post("users", {username, password});
      setLoading(false);
      setSucess(true);
    } catch {
      setError(true);
      setLoading(false);
      setSucess(false);
    }
  };

  const valid = data.username.trim().length > 0 && data.password.trim().length > 0 && data.confirmPassword.trim().length > 0 && data.password.trim() === data.confirmPassword.trim();
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FiChevronDown height={150} width={150} />
        <h5>Register below</h5>
        {loading && <Spinner />}
        {location && <p>{location.state}</p>}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <FiUser />
            </InputGroupText>
          </InputGroupAddon>
          <Input
          type="text"
          placeholder="Username"
          name="username"
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
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          maxLength="60"
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
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={handleInputChange}
          maxLength="60"
          />
        </InputGroup>
        <br />
        <Button {...(valid || {disabled: true})}>Register</Button>
      </form>
        {error && <p className="text-danger">This user already exists</p>}
        {sucess && <p className="text-success">Sucessfully created account!</p>}
      <p>Already an user ? <Link to="/">Sign in</Link> here</p>
    </Container>
  )
}

export default Form;