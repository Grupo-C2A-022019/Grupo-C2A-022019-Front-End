import React from "react";

import { Button } from "@material-ui/core";
import { connect } from "formik";

function SubmitButton({ formik: { isSubmitting }, disabled, ...props }) {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled || isSubmitting}
      {...props}
    />
  );
}

export default connect(SubmitButton);
