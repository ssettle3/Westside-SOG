import React from "react";
import styled from "styled-components/macro";
import { genres } from "../services/genres";
import { Genre } from "./Genre";

const Container = styled.div`
  padding: 50px 0;
  width: 100%;

  @media only screen and (max-width: 600px) {
  }
`;

export const DiscoverMovies = () => (
  <Container>
    {genres.map((genre, index) => (
      <Genre key={index} genre={genre} />
    ))}
  </Container>
);
