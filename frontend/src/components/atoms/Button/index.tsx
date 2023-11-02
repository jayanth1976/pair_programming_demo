import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface ButtonComponentProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonComponent = ({ children, ...props }: ButtonComponentProps) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
