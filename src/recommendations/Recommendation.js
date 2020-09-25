import React from "react";
import styled from "styled-components/macro";
import { TMDB_IMAGE_URL } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Image = styled.img`
  width: 250px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
`;

export const Recommendation = ({ movie }) => {
  return (
    <Container>
      <Card>
        <Image src={`${TMDB_IMAGE_URL}/${movie.poster_path}`} />
        <Info>
          <div>Recommendations: {movie.recommenders.length}</div>
          <div>
            Recommended By:{" "}
            {movie.recommenders.map((recommender) => (
              <span>{recommender.username}</span>
            ))}
          </div>
        </Info>
      </Card>
    </Container>
  );
};
