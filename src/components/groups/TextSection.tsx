import React from "react";
import styled from "styled-components";

type TextSectionType = {
  title?: string;
  text?: string;
  style?: {};
  children?: any;
};

const TextSection = ({ title, text, children, style }: TextSectionType) => {
  return (
    <Paragraph style={style}>
      <Title>{title}</Title>
      {text ? <p>{text}</p> : null}
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.h4`
  padding-bottom: 5px;
  font-weight: bolder;
`;

export default TextSection;
