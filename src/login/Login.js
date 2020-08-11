import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Space } from "../space/Space";
import logo from "../images/sog.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  object-fit: none;
  width: 400px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 350px;
  }
`;

const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
  width: 400px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100%;

    button {
      width: 95%;
    }
  }
`;

const Small = styled.div`
  font-style: italic;
  color: lightgrey;
`;

export const Login = ({ facebookLogin, login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Image alt="logo" src={logo} />
      <LoginOptions>
        <TextField
          label="username"
          onChange={(e) => setUsername(e.target.value)}
          style={{ paddingLeft: 5 }}
          value={username}
        />
        <Space pad="10px" />
        <TextField
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ paddingLeft: 5 }}
          type="password"
          value={password}
        />
        <ButtonWrapper>
          <Button
            disabled={!username || !password}
            variant="contained"
            color="primary"
            onClick={() => login(username, password)}
          >
            Login
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Small>Don't have an account?</Small>
          <Link to="/signup">
            <Button color="primary">Create Account</Button>
          </Link>
          <Button color="primary" onClick={facebookLogin}>
            Login With Facebook
          </Button>
        </ButtonWrapper>
      </LoginOptions>
    </Container>
  );
};
