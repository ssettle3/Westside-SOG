import React from "react";
import styled from "styled-components/macro";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { TMDB_IMAGE_URL } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MovieWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 350px;

  @media only screen and (max-width: 600px) {
    width: 260px;
  }
`;

const ThumbWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
  padding: 15px;

  &:hover {
    color: green;
  }
`;

export const Movie = ({ movie }) => (
  <Container>
    <MovieWrapper>
      <Image src={`${TMDB_IMAGE_URL}/${movie.poster_path}`} />
      <ThumbWrapper onClick={() => console.log(`recommending ${movie.title}`)}>
        <ThumbUpAltOutlinedIcon fontSize="large" />
      </ThumbWrapper>
    </MovieWrapper>
  </Container>
);
