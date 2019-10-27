import React, { useCallback } from "react";
import { func } from "prop-types";

import I18n from "components/commons/I18n";
import TextInput from "components/commons/input/TextInput";

export default function SearchBox({ onSearch }) {
  const onChange = useCallback(({ target: { value } }) => onSearch(value), [
    onSearch
  ]);

  return (
    <TextInput
      fullWidth
      name="searchTerm"
      onChange={onChange}
      label={<I18n id="search.label" />}
    />
  );
}

SearchBox.propTypes = {
  onSearch: func
};

SearchBox.defaultProps = {
  onSearch: () => {}
};
