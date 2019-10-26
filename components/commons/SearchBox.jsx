import React, { useCallback, useEffect, useState } from "react";
import { string, bool, func } from "prop-types";
import { Formik, Form, Field } from "formik";

import I18n from "components/commons/I18n";
import TextField from "components/form/field/TextField";

export default function SearchBox({ onSearch, ...props }) {
  return (
    <div>
      <Formik>
        <Form>
          <Field
            fullWidth
            name="searchTerm"
            component={TextField}
            onChange={onSearch}
            label={<I18n id="search.label" />}
          />
        </Form>
      </Formik>
    </div>
  );
}

SearchBox.propTypes = {};

SearchBox.defaultProps = {};
