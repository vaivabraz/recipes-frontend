import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { Colors } from "../../constants";
import { Text } from "../../ui";

interface buttonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: any;
  text?: string;
}

const ButtonSvg: React.FC<buttonInterface> = ({ Icon, text, ...props }) => {
  return (
    <ButtonBox {...props}>
      <Icon />
      <Text type="button" text={text} />
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
  svg {
    fill: ${Colors.DarkGrey}; //TODO: negrazi spalva!!!
  }
  svg:hover {
    fill: ${Colors.DarkGrey};
  }
  h5 {
    padding-left: 0.5rem;
  }
`;
