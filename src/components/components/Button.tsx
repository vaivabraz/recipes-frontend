import React from "react";
import styled from "styled-components";
import { Colors } from "../../constants";

type Props = {
  text: string;
  size?: string;
  action?: () => void;
};

const Button: React.FC<Props> = ({ text, action, size }) => {
  return (
    <ButtonBox size={size} onClick={action}>
      <Text size={size}>{text}</Text>
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12rem;
  border: 1px ${Colors.Border} solid;
  background-color: ${Colors.Background};
  &:hover {
    border: 1px ${Colors.BorderDarker} solid;
  }
`;

const Text = styled.p`
  padding: 1rem;
  font-size: 16px;
  ${ButtonBox}:hover & {
    color: ${Colors.AccentColor};
    font-weight: bolder;
  }
`;
