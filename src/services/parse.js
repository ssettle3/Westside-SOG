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

export const getUserRecommendations = async () => {
  const query = new Parse.Query("Recommendation").equalTo(
    "user",
    Parse.User.current()
  );
  const results = await query.find();

  return results.map((result) => result.toJSON());
};

export const getAllRecommendations = async () => {
  const query = new Parse.Query("Recommendation");
  const results = await query.find();

  return results.map((result) => result.toJSON());
};

export const makeRecommendation = (movie, callback) => {
  const Recommendation = Parse.Object.extend("Recommendation");
  const recommendation = new Recommendation();

  recommendation.set("movie_id", movie.id);
  recommendation.set("movie_name", movie.title);
  recommendation.set("user", currentUser());
  recommendation.set("poster_path", movie.poster_path);

  recommendation.save().then(
    () => {
      callback(`${movie.title} has been recommended`, "success", movie);
    },
    (error) => {
      callback(error.message, "error");
    }
  );
};
