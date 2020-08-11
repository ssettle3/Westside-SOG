import React from "react";
import styled from "styled-components/macro";

const Spacer = styled.div`
  padding: ${(props) => props.padding};
`;

export const Space = ({ pad }) => <Spacer padding={pad} />;
