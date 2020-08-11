import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HelpIcon from "@material-ui/icons/Help";
import PollIcon from "@material-ui/icons/Poll";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { Icon } from "../icon/Icon";
import { hydratedCurrentUser } from "../services/parse";

const Container = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  toolbar: {
    justifyContent: "space-around",
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <Icon icon={SearchIcon} tooltip="Search Movies" />
          </Link>
          <Link to="/recommendations">
            <Icon icon={PollIcon} tooltip="Recommendations" />
          </Link>
          <Link to="/about">
            <Icon icon={HelpIcon} tooltip="What is this?" />
          </Link>
          <Link to="/profile">
            <Icon
              alt="user-pic"
              src={hydratedCurrentUser().picture}
              icon={AccountCircleIcon}
              tooltip="Profile"
            />
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
