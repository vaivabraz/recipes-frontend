import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { Colors } from "../../constants";
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
  background-color: ${Colors.Background};
  border: 1px ${Colors.Border} solid;
  &:hover {
    border: 1px ${Colors.BorderDarker} solid;
    h5 {
      color: ${Colors.AccentColor};
      font-weight: bolder;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  padding: 0.5rem 2rem;
`;
