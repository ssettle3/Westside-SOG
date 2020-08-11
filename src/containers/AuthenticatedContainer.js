import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Header } from "../header/Header";
import { FindMovies } from "../find/FindMovies";
import { RecommendedMovies } from "../recommendations/RecommendedMovies";
import { About } from "../about/About";
import { Privacy } from "../privacy/Privacy";
import { Profile } from "../profile/Profile";
import { Footer } from "../footer/Footer";
import { HistoryContextProvider } from "../context/HistoryContext";

export const AuthenticatedContainer = withRouter(({ history, logout }) => (
  <HistoryContextProvider history={history}>
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
      <Route exact path="/profile">
        <Profile logout={logout} />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </HistoryContextProvider>
));
