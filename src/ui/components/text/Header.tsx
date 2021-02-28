import React from "react";
import styled from "styled-components";
import Text from "./Text";

type HeaderType = {
  text?: string;
};

const Header = ({ text }: HeaderType) => {
  return <Text type={"h2"} text={text} />;
};

//TODO: isSmall ? h2
const StyledHeader = styled.h2`
  padding: 3rem 2rem;
`;

export default Header;
