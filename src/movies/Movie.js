import React from "react";
import styled from "styled-components/macro";

import { TMDB_IMAGE_URL } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Movie = ({ movie }) => (
  <Container>
    <Image src={`${TMDB_IMAGE_URL}/${movie.poster_path}`} />
  </Container>
);
