import React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input
} from "@material-ui/core";

export default function TextInput({ name, label, error, ...props }) {
  return (
    <FormControl {...props} error={error}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input id={name} aria-describedby={`${name}-helper-text`} {...props} />
      <FormHelperText id={`${name}-helper-text`}>{error}</FormHelperText>
    </FormControl>
  );
}
