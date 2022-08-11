import { Typography } from "@mui/material";
import React from "react";
interface ErrorTextProps {
  error: string;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ error }) => {
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  return null;
};
