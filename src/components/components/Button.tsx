import React from "react";
import styled from "styled-components";
import { Colors } from "../../constants";

type Props = {
  text: string;
  size: string;
  action?: () => void;
};

const Button: React.FC<Props> = ({ text, action, size }) => {
  return (
    <ButtonBox size={size} onClick={action}>
      {text}
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
  font-size: 20px;
  height: 38px;
  border: 1px ${Colors.Border} solid;
  background-color: white;
  ${({ size }) =>
    size === "small" &&
    `
    font-size: 16px;
    height: 30px;
`}
  &:hover {
    background-color: ${Colors.SoftGrey};
    color: ${Colors.DarkGreen};
  }

  &:active {
    background-color: ${Colors.ActiveColor};
    color: ${Colors.SoftGrey};
  }
`;
