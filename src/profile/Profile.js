import React from "react";
import styled from "styled-components/macro";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { hydratedCurrentUser } from "../services/parse";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  padding: 50px;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const ProfileContents = styled.div`
  padding: 25px;
`;

const AuthActions = styled.div`
  margin-top: 50px;
`;

export const Profile = ({ logout }) => {
  console.log(hydratedCurrentUser());
  return (
    <Container>
      <Paper elevation={3}>
        <ProfileContents>
          <Typography variant="h2">{hydratedCurrentUser().username}</Typography>
          <Typography variant="h6" gutterBottom>
            {hydratedCurrentUser().email}
          </Typography>
          More details coming soon..
          <AuthActions>
            <Button variant="contained" color="primary" onClick={logout}>
              Log Out
            </Button>
          </AuthActions>
        </ProfileContents>
      </Paper>
    </Container>
  );
};
