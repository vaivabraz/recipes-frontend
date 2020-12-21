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
  -webkit-transition-duration: 0.3s; /* Safari */
  transition-duration: 0.3s;
  min-width: 12rem;
  max-width: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  border: 1px ${Colors.Border} solid;
  background-color: white;
  ${({ size }) =>
    size === "small" &&
    `
    height: 30px;
`}
  &:hover {
    background-color: ${Colors.Background};
    /* color: ${Colors.DarkGreen}; */
  }

  &:active {
    background-color: ${Colors.AccentColor};
    color: ${Colors.Background};
  }
`;

const Text = styled.p`
  padding: 1rem;
  font-size: 1.4vmax;

  ${({ size }) =>
    size === "small" &&
    `
    font-size: 16px;
`}

  @media screen and (max-width: 940px) {
    font-size: 20px;
    ${({ size }) =>
      size === "small" &&
      `
    font-size: 16px;
`}
  }
`;
