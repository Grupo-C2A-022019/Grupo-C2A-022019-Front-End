import React, { useCallback } from "react";
import { Container } from "@material-ui/core";

import debounce from "lib/debounce";

import SearchBox from "components/commons/SearchBox";
import ToolBar from "components/ToolBar";

import useSearch from "hooks/useSearch";

export default function SearchPage() {
  const [results, search] = useSearch();

  const onSearch = useCallback(debounce(search, 500), [search]);

  return (
    <>
      <ToolBar />
      <Container>
        <SearchBox onSearch={onSearch} />
        <SearchResults results={results} />a
      </Container>
    </>
  );
}

function SearchResults({ results }) {
  return results.map(({ id, name }) => <div key={id}>{name}</div>);
}
