import React, { useState } from "react";
import styled from "styled-components/macro";
import { debounce } from "lodash";

import CircularProgress from "@material-ui/core/CircularProgress";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import { searchMovies, discoverMovies } from "../services/api";
import { genres } from "../services/genres";
import { SearchMovies } from "../search/SearchMovies";
import { DiscoverMovies } from "../discover/DiscoverMovies";
import { Movies } from "../movies/Movies";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  text-align: center;
`;

export const FindMovies = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [browseSelection, setBrowseSelection] = useState("search");

  const isActive = (selection) =>
    browseSelection === selection ? "contained" : "";

  const fetchMovies = debounce(async ({ text, type }) => {
    if (!text) return;
    setLoading(true);

    let response;

    if (type === "search") {
      response = await searchMovies(text);
    } else {
      const genreId = genres[text];
      response = await discoverMovies(genreId);
    }

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
          performSearch={(text) => fetchMovies({ text: text, type: "search" })}
        />
      )}

      {browseSelection === "genre" && (
        <DiscoverMovies
          performDiscovery={(genre) =>
            fetchMovies({ text: genre, type: "genre" })
          }
        />
      )}

      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}

      {results.length > 0 && <Movies movies={results} />}
    </Container>
  );
};
