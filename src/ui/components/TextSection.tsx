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
  padding-bottom: 1rem;
`;

const Title = styled.h4`
  padding-bottom: 0.2rem;
  font-weight: bolder;
`;

export default TextSection;
