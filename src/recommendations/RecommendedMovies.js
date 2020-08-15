import React, { useState } from "react";
import { useAsync } from "react-use";
import styled from "styled-components/macro";
import { Loading } from "../loading/Loading";
import { getAllRecommendations } from "../services/parse";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const RecommendedMovies = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState([]);

  useAsync(async () => {
    const recs = await getAllRecommendations();
    setRecommendations(recs);
    setLoading(false);
  }, []);

  return (
    <Container>
      {loading && <Loading />}
      {!loading && recommendations.length > 0 && <div>Recs!</div>}
      {!loading && recommendations.length === 0 && (
        <div>There are no recommendations right now! Go </div>
      )}
    </Container>
  );
};
