import React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input
} from "@material-ui/core";
import { ErrorMessage, getIn } from "formik";

export default function TextField({
  form: { errors, touched },
  field,
  label,
  ...props
}) {
  const { name } = field;

  const error = !!getIn(errors, name);
  const touch = !!getIn(touched, name);

  return (
    <FormControl {...props} error={error && touch}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        aria-describedby={`${name}-helper-text`}
        {...field}
        {...props}
      />
      <FormHelperText id={`${name}-helper-text`}>
        <ErrorMessage name={name} />
      </FormHelperText>
    </FormControl>
  );
}
