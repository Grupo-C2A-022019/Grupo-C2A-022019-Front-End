import React, { useState, useEffect } from "react";
import SelectorField from "./SelectorField";
import useApi from "hooks/useApi";

export default function OwnBusinessesSelectorField(props) {
  const {
    form: { setFieldError },
    field: { name }
  } = props;

  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = useApi();

  useEffect(() => {
    api
      .getOwnBusinesses()
      .then(setOptions)
      .catch(e => setFieldError(name, e))
      .finally(() => setLoading(false));
  }, [api, setFieldError, name]);

  return (
    <SelectorField
      {...props}
      options={options}
      loading={loading}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
    />
  );
}

function getOptionLabel({ id, name }) {
  return `${name} (${id})`;
}

function getOptionValue({ id }) {
  return id;
}
