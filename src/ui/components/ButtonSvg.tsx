import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { Colors } from "../../constants";

interface buttonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: any;
}

const ButtonSvg: React.FC<buttonInterface> = ({ Icon, ...props }) => {
  return (
    <ButtonBox {...props}>
      <Icon />
    </ButtonBox>
  );
};

export default ButtonSvg;

const ButtonBox = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  background-color: ${Colors.Background};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${Colors.AccentColor}; //TODO: negrazi spalva!!!
  }
  svg:hover {
    fill: ${Colors.DarkGrey};
  }
`;
