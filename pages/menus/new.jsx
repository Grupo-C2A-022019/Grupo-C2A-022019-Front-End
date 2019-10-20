import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import I18n from "components/commons/I18n";
import TextField from "components/form/field/TextField";
import SubmitButton from "components/form/SubmitButton";

import useApi from "hooks/useApi";
import MonetaryAmountField from "components/form/field/MonetaryAmountField";
import ToolBar from "components/ToolBar";
import { Container } from "@material-ui/core";

export default function NewMenu() {
  const api = useApi();

  const handleSubmit = useCallback(
    menu => {
      debugger;
      api.createMenu(menu);
    },
    [api]
  );

  return (
    <>
      <ToolBar />
      <Container>
        <NewMenuForm onSubmit={handleSubmit} />;
      </Container>
    </>
  );
}

function format(d) {
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

function NewMenuForm(props) {
  const now = new Date();
  const startingDate = format(now);
  const expirationDate = format(new Date(now.getTime() + 24 * 60 * 60 * 1000));

  return (
    <Formik
      validationSchema={Yup.object({
        name: Yup.string().required(),
        description: Yup.string().required(),
        img: Yup.string().required(),
        businessId: Yup.number()
          .positive()
          .required(),
        categoryIds: Yup.array(Yup.number()),
        startingDate: Yup.date().required(),
        expirationDate: Yup.date().required(),
        listPrice: Yup.object({
          amount: Yup.number()
            .positive()
            .required(),
          currency: Yup.string().required()
        }).required(),
        bulkSize: Yup.number().positive(),
        discountedPrice: Yup.object({
          amount: Yup.number()
            .positive()
            .required(),
          currency: Yup.string().required()
        })
      })}
      initialValues={{
        name: "Milangas con pure",
        description: "Altas milangas papa",
        img: "http://google.com/",
        businessId: 6,
        categoryIds: [],
        startingDate,
        expirationDate,
        listPrice: {
          amount: 20,
          currency: "ARS"
        },
        bulkSize: 20,
        discountedPrice: {
          amount: 10,
          currency: "ARS"
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
          label={<I18n id="menu.new.form.description" />}
          name="description"
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
          name="businessId"
          type="number"
        />
        <Field
          fullWidth
          component={MonetaryAmountField}
          label={<I18n id="menu.new.form.price" />}
          name="listPrice"
        />
        <Field
          fullWidth
          component={TextField}
          type="number"
          label={<I18n id="menu.new.form.bulkSize" />}
          name="bulkSize"
        />
        <Field
          fullWidth
          component={MonetaryAmountField}
          label={<I18n id="menu.new.form.price" />}
          name="discountedPrice"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.validity.startingDate" />}
          name="startingDate"
          type="date"
        />
        <Field
          fullWidth
          component={TextField}
          label={<I18n id="menu.new.form.business" />}
          name="expirationDate"
          type="date"
        />
        <SubmitButton variant="contained" color="primary" type="submit">
          <I18n id="menu.new" />
        </SubmitButton>
      </Form>
    </Formik>
  );
}
