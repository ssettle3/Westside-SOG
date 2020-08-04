import React from "react";
import styled from "styled-components/macro";
import Tooltip from "@material-ui/core/Tooltip";

const Wrapper = styled.div`
  cursor: pointer;
  padding-left: ${(props) => props.padl};
`;

export const Icon = ({ icon, tooltip, padl }) => {
  const Icon = icon;
  return (
    <Wrapper padl={padl}>
      <Tooltip title={tooltip}>
        <Icon />
      </Tooltip>
    </Wrapper>
  );
};
