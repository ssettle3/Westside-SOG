import React from "react";
import styled from "styled-components/macro";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 25%;
`;

const Message = styled.div`
  font-weight: semibold;
`;

export const Loading = ({ message }) => (
  <Container>
    <CircularProgress />
    {message && <Message>{message}</Message>}
  </Container>
);
