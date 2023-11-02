import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children, ...props }: TypographyProps) => {
  return <Typography {...props}>{children}</Typography>;
};

export default Text;
