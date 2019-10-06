import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import I18n from "components/commons/I18n";
import TextField from "components/form/field/TextField";
import SubmitButton from "components/form/SubmitButton";

import useApi from "hooks/useApi";

export default function NewMenu() {
  const api = useApi();

  const handleSubmit = useCallback(
    menu => {
      api.createMenu(menu);
    },
    [api]
  );

  return <NewMenuForm onSubmit={handleSubmit} />;
}

function NewMenuForm(props) {
  return (
    <Formik
      validationSchema={Yup.object({
        name: Yup.string().required(),
        img: Yup.string().required(),
        buiness: Yup.number().required(),
        price: Yup.number().required(),
        validity: Yup.object({
          startingDate: Yup.date().required(),
          expirationDate: Yup.date().required()
        })
      })}
      initialValues={{
        name: "",
        img: "",
        buiness: "",
        price: "",
        validity: {
          startingDate: "2019-09-20",
          expirationDate: "2019-09-21"
        }
      }}
      {...props}
    >
      <Form>
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.name" />}
          name="name"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.img" />}
          name="img"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.buiness" />}
          name="buiness"
          type="number"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.price" />}
          name="price"
          type="number"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.validity.startingDate" />}
          name="validity.startingDate"
          type="date"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.business" />}
          name="validity.expirationDate"
          type="date"
        />
        <SubmitButton variant="contained" color="primary" type="submit">
          <I18n id="menu.new" />
        </SubmitButton>
      </Form>
    </Formik>
  );
}
