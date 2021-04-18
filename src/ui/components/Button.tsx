import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { Text } from "../../ui";

interface buttonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button: React.FC<buttonInterface> = ({ text, children, ...props }) => {
  return (
    <ButtonBox {...props}>
      {children}
      {text && <Text type="button">{text}</Text>}
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  background-color: var(--Background);
  border: var(--BorderLine);
  &:hover {
    border: 1px var(--BorderDarker) solid;
    box-shadow: var(--Shadow);
    h5 {
      color: var(--AccentColor);
      font-weight: bolder;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  padding: 0.5rem 2rem;
`;
