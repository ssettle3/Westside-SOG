import React, { useState } from "react";
import { useAsync } from "react-use";
import { useSnackbar } from "notistack";
import styled from "styled-components/macro";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { SearchMovies } from "../search/SearchMovies";
import { DiscoverMovies } from "../discover/DiscoverMovies";
import { getUserRecommendations, makeRecommendation } from "../services/parse";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  text-align: center;
`;

export const FindMovies = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [browseSelection, setBrowseSelection] = useState("search");
  const [userRecommendations, setUserRecommendations] = useState([]);

  const isActive = (selection) =>
    browseSelection === selection ? "contained" : "";

  useAsync(async () => {
    const userRecs = await getUserRecommendations();
    setUserRecommendations(userRecs);
  }, []);

  const recommendationCallback = (message, variant, movie) => {
    enqueueSnackbar(message, { variant });
    setUserRecommendations((recs) => [...recs, movie]);
  };

  const recommendMovie = (movie) => {
    makeRecommendation(movie, recommendationCallback);
  };

  return (
    <Container>
      <ButtonGroup color="primary">
        <Button
          variant={isActive("genre")}
          onClick={() => setBrowseSelection("genre")}
        >
          Explore
        </Button>
        <Button
          variant={isActive("search")}
          onClick={() => setBrowseSelection("search")}
        >
          Search
        </Button>
      </ButtonGroup>

      {browseSelection === "search" && (
        <SearchMovies
          userRecommendations={userRecommendations}
          recommendMovie={recommendMovie}
        />
      )}
      {browseSelection === "genre" && (
        <DiscoverMovies
          userRecommendations={userRecommendations}
          recommendMovie={recommendMovie}
        />
      )}
    </Container>
  );
};
