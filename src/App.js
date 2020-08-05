import React from "react";
import Parse from "parse";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Privacy } from "./privacy/Privacy";
import { FindMovies } from "./find/FindMovies";
import { RecommendedMovies } from "./recommendations/RecommendedMovies";
import { About } from "./about/About";
import { HistoryContextProvider } from "./context/HistoryContext";
import { theme } from "./theme";

const Container = withRouter(({ history }) => (
  <HistoryContextProvider history={history}>
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/">
          <FindMovies />
        </Route>
        <Route exact path="/recommendations">
          <RecommendedMovies />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </ThemeProvider>
  </HistoryContextProvider>
));

export const App = () => {
  Parse.serverURL = process.env.PARSE_URL;
  Parse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_KEY);

  return (
    <Router>
      <Container />
    </Router>
  );
};
