import React from "react";
import styled from "styled-components/macro";

import { TMDB_IMAGE_URL } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 350px;

  @media only screen and (max-width: 600px) {
    width: 260px;
  }
`;

export const Movie = ({ movie }) => (
  <Container>
    <Image src={`${TMDB_IMAGE_URL}/${movie.poster_path}`} />
  </Container>
);
