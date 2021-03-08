import React from "react";
import { Colors } from "../../../constants";

type TextSectionType = {
  text?: string | Number;
  type?: string;
  children?: any;
  style?: object;
  color?: "accent" | "dimmed" | "error";
};

//TODO: h2 turi sumazet kai mazas ekranas

const typeStyles = {
  h1: { fontSize: "39.06px", lineHeight: "66px" },
  h2: { fontSize: "31.25px", lineHeight: "53px" }, //page headre?
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

const colors = {
  accent: Colors.AccentColor,
  dimmed: Colors.BorderDarker, //TODO: change!
  error: Colors.errorsRed,
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
    color: color && colors[color], // : Colors.Text,
    ...style,
  };
  return <h5 style={styles}>{childToRender}</h5>;
};

export default Text;
