import React from "react";
import styled from "styled-components/macro";

import { Movie } from "./Movie";

const Container = styled.div`
  display: grid;
`;

export const Movies = ({ movies }) => (
  <Container>
    {movies.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))}
  </Container>
);
