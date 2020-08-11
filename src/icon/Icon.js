import React from "react";
import styled from "styled-components/macro";
import Tooltip from "@material-ui/core/Tooltip";

const Wrapper = styled.div`
  cursor: pointer;
  padding-left: ${(props) => props.padl};
`;

const Image = styled.img`
  border-radius: 50%;
  width: 25px;
`;

export const Icon = ({ icon, tooltip, padl, src }) => {
  const Icon = icon;

  return (
    <Wrapper padl={padl}>
      {src && (
        <Tooltip title={tooltip}>
          <Image alt={src} src={src} width="40px" />
        </Tooltip>
      )}

      {icon && !src && (
        <Tooltip title={tooltip}>
          <Icon />
        </Tooltip>
      )}
    </Wrapper>
  );
};
