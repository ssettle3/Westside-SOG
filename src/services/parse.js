import Parse from "parse";

export const initializeParse = async () => {
  Parse.serverURL = process.env.REACT_APP_PARSE_URL;
  Parse.initialize(
    process.env.REACT_APP_PARSE_APP_ID,
    process.env.REACT_APP_PARSE_KEY
  );
};

export const currentUser = () => Parse.User.current();

export const hydratedCurrentUser = () => currentUser()._getServerData();
