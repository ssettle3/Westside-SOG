import React from "react";
import styled from "styled-components/macro";
import { Input } from "../input/Input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  min-width: 400px;

  @media only screen and (max-width: 600px) {
    min-width: 100%;
    padding: 50px 5px;
  }
`;

export const SearchMovies = ({ performSearch }) => {
  return (
    <Container>
      <Input
        placeholder="Thor Ragnarok"
        label="Search movies by name"
        onChange={performSearch}
      />
    </Container>
  );
};
