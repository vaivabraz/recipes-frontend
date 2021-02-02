import React from "react";
import styled, { css } from "styled-components";
import { Column } from "./Column";

type Props = {
  children: React.ReactNode;
  breakpoints?: number[];
};

export const Row = ({ children, breakpoints = [769] }: Props) => {
  return (
    <Wrapper breakpoint={breakpoints[0]}>
      {React.Children.toArray(children).map((item) => {
        return item && <Column>{item.props.children}</Column>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper1 = styled.div`
  @media (min-width: ${(props) => props.breakpoint}px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* margin: 0 -8px 0 -8px; */
  }
`;
