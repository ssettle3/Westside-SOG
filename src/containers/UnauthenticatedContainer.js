import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { HistoryContextProvider } from "../context/HistoryContext";
import { Login } from "../login/Login";
import { Signup } from "../signup/Signup";

export const UnauthenticatedContainer = withRouter(
  ({ history, facebookLogin, logIn, signUp }) => (
    <HistoryContextProvider history={history}>
      <Switch>
        <Route exact path="/login">
          <Login facebookLogin={facebookLogin} login={logIn} />
        </Route>
        <Route exact path="/signup">
          <Signup signUp={signUp} />
        </Route>
        <Redirect from="*" to="/login" />
      </Switch>
    </HistoryContextProvider>
  )
);
