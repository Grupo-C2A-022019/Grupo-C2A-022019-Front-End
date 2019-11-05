import React from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem
} from "@material-ui/core";
import { ErrorMessage, getIn } from "formik";

export default function SelectorField({
  form: { errors, touched },
  field,
  label,
  options,
  getOptionLabel,
  getOptionValue,
  ...props
}) {
  const { name } = field;

  const error = !!getIn(errors, name);
  const touch = !!getIn(touched, name);

  return (
    <FormControl {...props} error={error && touch}>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <Select {...field}>
        {options.map(option => (
          <MenuItem key={getOptionValue(option)} value={getOptionValue(option)}>
            {getOptionLabel(option)}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id={`${field.name}-helper-text`}>
        <ErrorMessage name={field.name} />
      </FormHelperText>
    </FormControl>
  );
}

SelectorField.defaultProps = {
  options: [],
  getOptionLabel: ({ label }) => label,
  getOptionValue: ({ value }) => value
};
