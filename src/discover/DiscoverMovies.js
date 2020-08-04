import React from "react";
import styled from "styled-components/macro";
import { genres } from "../services/genres";
import { Genre } from "./Genre";

const Container = styled.div`
  padding: 50px;
`;

export const DiscoverMovies = () => (
  <Container>
    {genres.map((genre, index) => (
      <Genre key={index} genre={genre} />
    ))}
  </Container>
);
