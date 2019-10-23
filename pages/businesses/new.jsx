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
        .catch(e => console.log(e))
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
        name: "",
        img: "http://google.com/",
        //Localidad:,
        //Dirección y Ubicación en un mapa (Google Maps preferentemente) [Obligatorio]
        description: "",
        urlServ: "",
        email: "",
        tel: "",
        schedule: ""
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        img: Yup.string().required(),
        //Localidad:,
        //Dirección y Ubicación en un mapa (Google Maps preferentemente) [Obligatorio]
        description: Yup.string().required(),
        urlServ: Yup.string(),
        email: Yup.string().required(),
        tel: Yup.number()
          .positive()
          .required(),
        schedule: Yup.string().required()
      })}
    >
      <Form>
        <Field
          fullWidth
          name="name"
          component={TextField}
          label={<I18n id="business.new.form.name" />}
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="business.new.form.img" />}
          name="img"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="business.new.form.description" />}
          name="description"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="business.new.form.urlServ" />}
          name="urlServ"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="business.new.form.email" />}
          name="email"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="business.new.form.tel" />}
          name="tel"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="business.new.form.schedule" />}
          name="schedule"
        />
        <SubmitButton>
          <I18n id="business.new" />
        </SubmitButton>
      </Form>
    </Formik>
  );
}
