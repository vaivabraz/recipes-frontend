import React from "react";
import { Text } from ".";

interface ErrorTextProps {
  error: string;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ error }) => {
  if (error) {
    return <Text color="error">{error}</Text>;
  }
  return null;
};
