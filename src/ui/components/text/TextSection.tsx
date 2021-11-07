import React from "react";
import { Typography, Box } from "@mui/material";

type TextSectionType = {
  title?: string;
  text?: string;
  style?: {};
  children?: any;
};

const TextSection = ({ title, text, children, style }: TextSectionType) => {
  return (
    <Box paddingBottom="24px">
      <Typography variant="h5">{title}</Typography>
      {text && (
        <Typography variant="body1" style={{ paddingLeft: "1rem" }}>
          {text}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default TextSection;
