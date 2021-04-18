import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils";

type Props = {
  children: React.ReactNode;
  extraSmall?: ColumnArg;
  small?: ColumnArg;
  medium?: ColumnArg;
  large?: ColumnArg;
  offsetSmall?: ColumnOffset;
  offsetMedium?: ColumnOffset;
  offsetLarge?: ColumnOffset;
  style?: object;
  responsive?: boolean;
};

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnWidth = ColumnSize | "auto";
export type ColumnOffset = ColumnSize | null;
type ColumnArg = ColumnWidth | null;

export const Column = ({
  extraSmall = null,
  small = "auto",
  medium = null,
  large = null,
  style,
  responsive,
  ...props
}: Props) => {
  return (
    <StyledColumn
      extraSmall={extraSmall}
      small={small}
      medium={medium}
      large={large}
      style={style}
      responsive={responsive}
      {...props}
    />
  );
};

const width = (breakpointWidth: string, columnWidth: ColumnWidth) => {
  if (columnWidth === "auto") {
    return `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    `;
  }
  return `
    @media (min-width: ${breakpointWidth}) {
      max-width: ${calculateColumnWidth(columnWidth)}%;
      flex-basis: ${calculateColumnWidth(columnWidth)}%;
    }
  `;
};

const calculateColumnWidth = (columnNumber) => {
  const maxColumn = 12;
  return (100 * columnNumber) / maxColumn;
};

const StyledColumn = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: ${(props) => (props.responsive ? null : "1rem")};
  width: 100%;
  ${(props) =>
    props.extraSmall && width(BREAKPOINTS.extraSmall, props.extraSmall)};
  ${(props) => props.small && width(BREAKPOINTS.small, props.small)};
  ${(props) => props.medium && width(BREAKPOINTS.medium, props.medium)};
  ${(props) => props.large && width(BREAKPOINTS.large, props.large)};
  @media (min-width: ${BREAKPOINTS.small}) {
    padding: 1rem;
  }
`;
