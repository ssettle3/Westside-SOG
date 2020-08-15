import React, { useState } from "react";
import styled from "styled-components/macro";
import CircularProgress from "@material-ui/core/CircularProgress";
import { debounce } from "lodash";
import { Input } from "../input/Input";
import { Movies } from "../movies/Movies";
import { searchMovies } from "../services/api";
import { Loading } from "../loading/Loading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  min-width: 400px;

  @media only screen and (max-width: 600px) {
    min-width: 100%;
  }
`;

export const SearchMovies = ({ userRecommendations, recommendMovie }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchMovies = debounce(async (text) => {
    if (!text) return;
    setLoading(true);

    const response = await searchMovies(text);

    if (response.status !== 200) {
      return; // TODO: handle error
    }

    const filteredMovies = response.data.results.filter(
      (result) => !!result.poster_path
    );

    setResults(filteredMovies);
    setLoading(false);
  }, 1000);

  return (
    <Container>
      <Input
        placeholder="Thor Ragnarok"
        label="Search movies by name"
        onChange={fetchMovies}
      />

      {loading && <Loading />}

      {results.length > 0 && (
        <Movies
          movies={results}
          userRecommendations={userRecommendations}
          recommendMovie={recommendMovie}
        />
      )}
    </Container>
  );
};
