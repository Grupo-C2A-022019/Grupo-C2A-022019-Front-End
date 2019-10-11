import React from "react";

import TextField from "./TextField";
import { Field } from "formik";

function MonetaryAmountField({ form, field: { name }, ...props }) {
  return (
    <>
      <Field {...props} name={`${name}.currency`} component={TextField} />
      <Field {...props} component={TextField} name={`${name}.amount`} />
    </>
  );
}

export default MonetaryAmountField;
