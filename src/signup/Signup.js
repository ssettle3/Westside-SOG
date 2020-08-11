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

const Options = styled.div`
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

export const Signup = ({ signUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const isDisabled = () =>
    !username ||
    !password ||
    !passwordConfirmation ||
    password !== passwordConfirmation;

  const checkPasswords = () => {
    if (!password || !passwordConfirmation) return;

    if (password !== passwordConfirmation) {
      setError("passwords do not match");
      return;
    }

    setError("");
  };

  return (
    <Container>
      <Image alt="logo" src={logo} />
      <Options>
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
          onBlur={checkPasswords}
          style={{ paddingLeft: 5 }}
          type="password"
          value={password}
        />
        <Space pad="10px" />
        <TextField
          label="password confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          onBlur={checkPasswords}
          style={{ paddingLeft: 5 }}
          type="password"
          value={passwordConfirmation}
        />
        <div>{error}</div>
        <ButtonWrapper>
          <Button
            disabled={isDisabled()}
            variant="contained"
            color="primary"
            onClick={() => signUp(username, password)}
          >
            Create Account
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Small>Already have an account?</Small>
          <Link to="/login">
            <Button color="primary">Login</Button>
          </Link>
        </ButtonWrapper>
      </Options>
    </Container>
  );
};
