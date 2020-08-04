import React, { useState } from "react";
import styled from "styled-components/macro";
import { useAsync } from "react-use";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

import { discoverMovies } from "../services/api";
import { Movie } from "../movies/Movie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  min-height: 350px;
`;

const Header = styled.div`
  text-transform: capitalize;
  padding-bottom: 10px;
`;

const ScrollableList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

export const Genre = ({ genre }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const genreName = Object.keys(genre)[0];
  const genreId = genre[genreName];

  useAsync(async () => {
    try {
      const response = await discoverMovies(genreId);

      if (response.status !== 200) {
        // handle error
      }

      setMovies(response.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Header>{genreName}</Header>
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
      {!loading && movies.length > 0 && (
        <ScrollableList>
          <GridList cols={2.5} style={{ flexWrap: "nowrap" }}>
            {movies.map((movie) => (
              <GridListTile
                key={movie.id}
                style={{ height: "auto", width: "20%" }}
              >
                <Movie movie={movie} />
              </GridListTile>
            ))}
          </GridList>
        </ScrollableList>
      )}
    </Container>
  );
};
