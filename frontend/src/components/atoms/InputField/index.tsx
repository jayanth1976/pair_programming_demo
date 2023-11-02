import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const InputField = ({ ...props }: TextFieldProps) => {
  return <TextField {...props} />;
};

export default InputField;
