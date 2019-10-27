import React from "react";
import { ErrorMessage, getIn } from "formik";

import TextInput from "components/commons/input/TextInput";

export default function TextField({
  form: { errors, touched },
  field,
  ...props
}) {
  const { name } = field;

  const error = !!getIn(errors, name);
  const touch = !!getIn(touched, name);

  return (
    <TextInput
      {...field}
      {...props}
      error={error && touch && <ErrorMessage name={name} />}
    />
  );
}
