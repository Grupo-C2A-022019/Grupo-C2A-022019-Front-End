import React, { useCallback } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Container } from "@material-ui/core";

import ToolBar from "components/ToolBar";
import TextField from "components/form/field/TextField";
import I18n from "components/commons/I18n";
import SubmitButton from "components/form/SubmitButton";

import useApi from "hooks/useApi";

export default function NewBusiness() {
  const api = useApi();
  const { push } = useRouter();

  const createBusiness = useCallback(
    (business, { setErrors, setSubmitting }) =>
      api
        .createBusiness(business)
        .then(({ id }) => push(`/businesses/${id}`, `/businesses/${id}`))
        .catch(setErrors)
        .finally(() => setSubmitting(false)),
    [api, push]
  );

  return (
    <>
      <ToolBar />
      <Container>
        <NewBusinessForm onSubmit={createBusiness} />
      </Container>
    </>
  );
}

NewBusiness.propTypes = {};

NewBusiness.defaultProps = {};

function NewBusinessForm({ onSubmit }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        name: ""
      }}
      validationSchema={Yup.object({
        name: Yup.string().required()
      })}
    >
      <Form>
        <Field
          fullWidth
          name="name"
          component={TextField}
          label={<I18n id="business.new.form.name" />}
        />
        <SubmitButton>
          <I18n id="business.new" />
        </SubmitButton>
      </Form>
    </Formik>
  );
}
