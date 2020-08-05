import React, { useState } from "react";
import styled from "styled-components/macro";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { SearchMovies } from "../search/SearchMovies";
import { DiscoverMovies } from "../discover/DiscoverMovies";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  text-align: center;
`;

export const FindMovies = () => {
  const [browseSelection, setBrowseSelection] = useState("search");

  const isActive = (selection) =>
    browseSelection === selection ? "contained" : "";

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

      {browseSelection === "search" && <SearchMovies />}
      {browseSelection === "genre" && <DiscoverMovies />}
    </Container>
  );
};
