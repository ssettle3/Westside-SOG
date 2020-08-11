import React from "react";
import styled from "styled-components/macro";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HelpIcon from "@material-ui/icons/Help";
import PollIcon from "@material-ui/icons/Poll";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { Icon } from "../icon/Icon";
import { hydratedCurrentUser } from "../services/parse";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ minHeight: 50 }}>
        <Content>
          <Link to="/">
            <Typography variant="h6">Westside SOG</Typography>
          </Link>
          <Icons>
            <Link to="/">
              <Icon icon={SearchIcon} tooltip="Search Movies" padl="40px" />
            </Link>
            <Link to="/recommendations">
              <Icon icon={PollIcon} tooltip="Recommendations" padl="40px" />
            </Link>
            <Link to="/about">
              <Icon icon={HelpIcon} tooltip="What is this?" padl="40px" />
            </Link>
            <Link to="/profile">
              <Icon
                alt="user-pic"
                padl="40px"
                src={hydratedCurrentUser().picture}
                icon={AccountCircleIcon}
                tooltip="Profile"
              />
            </Link>
          </Icons>
        </Content>
      </Toolbar>
    </AppBar>
  );
};
