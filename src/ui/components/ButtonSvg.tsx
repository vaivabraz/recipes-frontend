import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { Text } from "../../ui";

interface buttonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: any;
  text?: string;
}

const ButtonSvg: React.FC<buttonInterface> = ({ Icon, text, ...props }) => {
  return (
    <ButtonBox {...props}>
      <Icon />
      {text && <Text type="button" text={text} />}
    </ButtonBox>
  );
};

export default ButtonSvg;

const ButtonBox = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  background-color: var(--Background);
  display: flex;
  align-items: center;
  svg {
    fill: var(--DarkGrey); //TODO: negrazi spalva!!!
  }
  svg:hover {
    fill: var(--DarkGrey);
  }
  h5 {
    padding-left: 0.5rem;
  }
`;
