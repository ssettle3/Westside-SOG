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
  color: lightgray;
  cursor: pointer;
  padding: 15px;

  &:hover {
    color: green;
  }
`;

export const Movie = ({ movie, recommendMovie, isRecommended }) => (
  <Container>
    <MovieWrapper>
      <Image src={`${TMDB_IMAGE_URL}/${movie.poster_path}`} />
      <ThumbWrapper onClick={() => recommendMovie(movie)}>
        {isRecommended ? (
          <ThumbUpIcon color="primary" fontSize="large" />
        ) : (
          <ThumbUpAltOutlinedIcon fontSize="large" />
        )}
      </ThumbWrapper>
    </MovieWrapper>
  </Container>
);
