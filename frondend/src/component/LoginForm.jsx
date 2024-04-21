/*eslint-disable*/

import { useState } from "react";
import styled from "styled-components";

import login from "../js/login";
import { NavLink } from "react-router-dom";

const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 100px;
  border: 1px solid #5a3e2b;
  border-radius: 30px;
  background-color: #76c7ad;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #5a3e2b;
  border-radius: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f4a226;
  color: #5a3e2b;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e5771f;
  }
`;

const ForgotPasswordLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    login(email, password);
    setEmail(email);
    setPassword(password);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </FormGroup>
      <SubmitButton type="submit">Login</SubmitButton>
      <ForgotPasswordLink>Forgotten password? </ForgotPasswordLink>
      <NavLink to="/signUp">
        <SignUpLink type="submit">SignUp</SignUpLink>
      </NavLink>
    </FormContainer>
  );
}

export default LoginForm;
