import React, { useState } from "react";
import styled from "styled-components/macro";
import { useAsync } from "react-use";
import CircularProgress from "@material-ui/core/CircularProgress";
import { discoverMovies } from "../services/api";
import { getCache, setCache } from "../services/cache";
import { Movie } from "../movies/Movie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const GridList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 100%;
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
  width: 100%;
`;

const ListTile = styled.li`
  list-style: none;
  margin-right: 1px;

  @media only screen and (max-width: 600px) {
  }
`;

export const Genre = ({ genre, userRecommendations, recommendMovie }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const genreName = Object.keys(genre)[0];
  const genreId = genre[genreName];

  const isRecommended = (movieId) =>
    userRecommendations.find((rec) => rec.movie_id === movieId);

  useAsync(async () => {
    const cacheResults = getCache(genreName);

    if (cacheResults && cacheResults.length) {
      setMovies(cacheResults);
      setLoading(false);
      return;
    }

    try {
      const response = await discoverMovies(genreId);

      if (response.status !== 200) {
        // handle error
      }

      setCache(genreName, response.data.results);
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
          <GridList cols={2.5}>
            {movies.map((movie) => (
              <ListTile key={movie.id}>
                <Movie
                  movie={movie}
                  recommendMovie={recommendMovie}
                  isRecommended={isRecommended(movie.id)}
                />
              </ListTile>
            ))}
          </GridList>
        </ScrollableList>
      )}
    </Container>
  );
};
