import React, { useEffect, useState } from "react";
import Parse from "parse";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider, useSnackbar } from "notistack";

import "./App.css";

import { AuthenticatedContainer } from "./containers/AuthenticatedContainer";
import { UnauthenticatedContainer } from "./containers/UnauthenticatedContainer";
import { theme } from "./theme";
import { initializeFacebook, facbookLogin } from "./services/facebook";
import { initializeParse } from "./services/parse";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    initializeParse();
    initializeFacebook();
  }, []);

  useEffect(() => {
    if (Parse.User.current()) {
      setIsAuthenticated(true);
      setLoading(false);
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);

  const logOut = () => {
    Parse.User.logOut();
    setIsAuthenticated(false);
  };

  const logIn = async (username, password) => {
    try {
      await Parse.User.logIn(username, password);
      setIsAuthenticated(true);
    } catch (e) {
      enqueueSnackbar("Invalid username/password", { variant: "error" });
    }
  };

  const signUp = async (username, password) => {
    const user = new Parse.User();

    user.set("username", username);
    user.set("password", password);

    try {
      await user.signUp();
      setIsAuthenticated(true);
    } catch (e) {
      enqueueSnackbar(e.toString(), { variant: "error" });
    }
  };

  const fbLogin = () => facbookLogin(handleUser);

  const handleUser = (user, error) => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      return;
    }

    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider theme={theme}>
      {loading && <div>Loading</div>}
      {isAuthenticated && !loading && (
        <AuthenticatedContainer logout={logOut} />
      )}
      {!isAuthenticated && !loading && (
        <UnauthenticatedContainer
          facebookLogin={fbLogin}
          logIn={logIn}
          signUp={signUp}
        />
      )}
    </ThemeProvider>
  );
};

export const AppContainer = () => {
  return (
    <Router>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <App />
      </SnackbarProvider>
    </Router>
  );
};
