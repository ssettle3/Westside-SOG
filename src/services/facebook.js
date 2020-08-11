import Parse from "parse";
import { FACEBOOK_APP_ID } from "../constants";

export const initializeFacebook = () => {
  window.fbAsyncInit = async () => {
    Parse.FacebookUtils.init({
      appId: FACEBOOK_APP_ID,
      cookie: true,
      xfbml: true,
      version: "v8.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
};

export const facbookLogin = (callback) => {
  Parse.FacebookUtils.logIn("public_profile,email", {})
    .then((user) => {
      if (user.existed()) return callback(user);

      window.FB.api(
        "/me?fields=id,name,email,picture,permissions",
        (response) => {
          user.set("username", response.name);
          user.set("email", response.email);
          user.set("picture", response.picture.data.url);
          user
            .save(null, {})
            .then((user) => callback(user))
            .catch((user, error) => callback(user, error));
        }
      );
    })
    .catch((error) => callback(null, error));
};
