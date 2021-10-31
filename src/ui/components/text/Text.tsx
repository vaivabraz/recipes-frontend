import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils";

type TextTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "button"
  | "caption";

type TextColors = "accent" | "dimmed" | "error";

type TextSectionType = {
  text?: string | Number;
  type?: TextTypes;
  children?: any;
  style?: object;
  color?: TextColors;
};

const Text = ({ text, children, type, color, style }: TextSectionType) => {
  const childToRender = text || children;
  const classNameColors = color ?? "";
  const classNameType = type ?? "body1";
  const className = classNameColors + " " + classNameType;
  return (
    <Txt className={className} style={style}>
      {childToRender}
    </Txt>
  );
};

const Txt = styled.h5`
  font-weight: normal;
  margin: 0;
  white-space: pre-wrap;
  color: var(--Text);

  &.accent {
    color: var(--AccentColor);
  }
  &.dimmed {
    color: var(--BorderDarker);
  }
  &.error {
    color: var(--errorsRed);
  }

  &.h1 {
    font-size: 39.06px;
    line-height: 66px;
    text-align: center;
  }
  &.h2 {
    font-size: 31.25px;
    line-height: 53px;
    text-align: center;
    @media (max-width: ${BREAKPOINTS.small}) {
      font-size: 25px;
      line-height: 41px;
    }
    //page headre?
  }
  &.h3 {
    font-size: 25px;
    line-height: 41px;
  }
  &.h4 {
    font-size: 20px;
    line-height: 34px;
    font-weight: bolder;
    //textSection Header
  }
  &.h5 {
    font-size: 16px;
    line-height: 27px;
    font-weight: bolder;
    //input label, label above smaller sections
  }
  &.body1 {
    font-size: 16px;
    line-height: 27px;
  }
  &.body2 {
    font-size: 14px;
    line-height: 24px;
  }
  &.subtitle1 {
    font-size: 16px;
    line-height: 27px;
  }
  &.subtitle2 {
    font-size: 14px;
    line-height: 24px;
  }
  &.button {
    font-size: 16px;
    line-height: 27px;
  }
  &.caption {
    font-size: 12px;
    line-height: 20px;
  }
`;

export default Text;
