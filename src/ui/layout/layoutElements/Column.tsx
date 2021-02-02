import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils";

type Props = {
  children: React.ReactNode;
  small?: ColumnArg;
  medium?: ColumnArg;
  large?: ColumnArg;
  offsetSmall?: ColumnOffset;
  offsetMedium?: ColumnOffset;
  offsetLarge?: ColumnOffset;
};

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnWidth = ColumnSize | "auto";
export type ColumnOffset = ColumnSize | null;
type ColumnArg = ColumnWidth | null;

export const Column = ({
  small = "auto",
  medium = null,
  large = null,
  ...props
}: Props) => {
  return (
    <StyledColumn small={small} medium={medium} large={large} {...props} />
  );
};

const width = (breakpointWidth: number, columnWidth: ColumnWidth) => {
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
    @media (min-width: ${breakpointWidth}px) {
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
  ${(props) => props.small && width(BREAKPOINTS.small, props.small)};
  ${(props) => props.medium && width(BREAKPOINTS.medium, props.medium)};
  ${(props) => props.large && width(BREAKPOINTS.large, props.large)};
`;
