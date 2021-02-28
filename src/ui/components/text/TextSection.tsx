import React from "react";
import styled from "styled-components";
import Text from "./Text";

type TextSectionType = {
  title?: string;
  text?: string;
  style?: {};
  children?: any;
};

const TextSection = ({ title, text, children, style }: TextSectionType) => {
  return (
    <Paragraph style={style}>
      <Text type={"h4"} text={title} />
      {text ? <Text style={{ paddingLeft: "1rem" }} text={text} /> : null}
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.div`
  padding-bottom: 1rem;
`;

export default TextSection;
