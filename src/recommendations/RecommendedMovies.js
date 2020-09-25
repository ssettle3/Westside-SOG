import React, { useState } from "react";
import { useAsync } from "react-use";
import styled from "styled-components/macro";
import { Recommendation } from "./Recommendation";
import { Loading } from "../loading/Loading";
import { getAllRecommendations } from "../services/parse";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
`;

export const RecommendedMovies = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  const formattedRecommendations = () => {
    const results = [];

    recommendations.map((rec) => {
      const existingRec = results.find(
        (result) => result.movie_id === rec.movie_id
      );

      if (existingRec) {
        return existingRec.recommenders.push(rec.user);
      } else {
        return results.push({ ...rec, recommenders: [rec.user] });
      }
    });

    return results;
  };

  useAsync(async () => {
    const recs = await getAllRecommendations();

    setRecommendations(recs);
    setLoading(false);
  }, []);

  return (
    <Container>
      {loading && <Loading />}

      {!loading &&
        recommendations.length > 0 &&
        formattedRecommendations().map((rec) => (
          <Recommendation key={rec.movie_id} movie={rec} />
        ))}

      {!loading && recommendations.length === 0 && (
        <div>There are no recommendations right now! Go make some!</div>
      )}
    </Container>
  );
};
