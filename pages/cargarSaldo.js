import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { Container } from "@material-ui/core";

import I18n from "components/commons/I18n";
import SubmitButton from "components/form/SubmitButton";
import MonetaryAmountField from "components/form/field/MonetaryAmountField";
import ToolBar from "components/ToolBar";

import useApi from "hooks/useApi";

export default function NewMenu() {
  const api = useApi();
  const { push } = useRouter();

  const handleSubmit = useCallback(
    (credit, { setErrors, setSubmitting }) =>
      api
        .chargeCredit(credit)
        .then(() => push(`/perfil`, `/perfil`))
        .catch(setErrors)
        .finally(() => setSubmitting(false)),
    [api, push]
  );

  return (
    <>
      <ToolBar />
      <Container>
        <NewSaldoForm onSubmit={handleSubmit} />;
      </Container>
    </>
  );
}

function NewSaldoForm(props) {
  return (
    <Formik
      validationSchema={Yup.object({
        saldo: Yup.object({
          amount: Yup.number()
            .positive()
            .required(),
          currency: Yup.string().required()
        }).required()
      })}
      initialValues={{
        saldo: {
          amount: 20,
          currency: "ARS"
        }
      }}
      {...props}
    >
      <Form>
        <Field
          fullWidth
          component={MonetaryAmountField}
          label={<I18n id="client.saldo" />}
          name="saldo"
        />
        <SubmitButton>
          <I18n id="cargar" />
        </SubmitButton>
      </Form>
    </Formik>
  );
}
