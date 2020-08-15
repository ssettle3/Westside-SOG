import React from "react";
import styled from "styled-components/macro";

import { Movie } from "./Movie";

const Container = styled.div`
  display: grid;
`;

export const Movies = ({ movies, userRecommendations, recommendMovie }) => {
  const isRecommended = (movieId) =>
    !!userRecommendations.find((rec) => rec.movie_id === movieId);

  return (
    <Container>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          isRecommended={isRecommended(movie.id)}
          recommendMovie={recommendMovie}
        />
      ))}
    </Container>
  );
};
