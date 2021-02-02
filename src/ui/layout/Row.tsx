import React from "react";
import styled from "styled-components";

export const Row = (props) => {
  return <StyledRow {...props} />;
};

const StyledRow = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;
