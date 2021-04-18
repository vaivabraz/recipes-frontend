import React from "react";
import styled from "styled-components";

type TextSectionType = {
  text?: string | Number;
  type?: string;
  children?: any;
  style?: object;
  color?: "accent" | "dimmed" | "error";
};

//TODO: h2 turi sumazet kai mazas ekranas

const typeStyles = {
  h1: { fontSize: "39.06px", lineHeight: "66px", textAlign: "center" },
  h2: { fontSize: "31.25px", lineHeight: "53px", textAlign: "center" }, //page headre?
  h3: { fontSize: "25px", lineHeight: "41px" },
  h4: { fontSize: "20px", lineHeight: "34px", fontWeight: "bolder" }, //textSection Header
  h5: { fontSize: "16px", lineHeight: "27px", fontWeight: "bolder" }, //input label, label above smaller sections
  body1: { fontSize: "16px", lineHeight: "27px" },
  body2: { fontSize: "14px", lineHeight: "24px" },
  subtitle1: { fontSize: "16px", lineHeight: "27px" },
  subtitle2: { fontSize: "14px", lineHeight: "24px" },
  button: { fontSize: "16px", lineHeight: "27px" },
  caption: { fontSize: "12px", lineHeight: "20px" },
};

const Text = ({
  text,
  children,
  type = "body1",
  color,
  style,
}: TextSectionType) => {
  const childToRender = text || children;
  const styles = {
    ...typeStyles[type],
    ...style,
  };
  const className = color ?? "";
  return (
    <Txt className={className} style={styles}>
      {childToRender}
    </Txt>
  );
};

const Txt = styled.h5`
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
`;

export default Text;
