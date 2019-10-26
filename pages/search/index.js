import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { Button, Container } from "@material-ui/core";

import SearchBox from "components/commons/SearchBox";
import I18n from "components/commons/I18n";
import ToolBar from "components/ToolBar";
import useSearch from "hooks/useSearch";

const tiempo = 500;
let timeout;

export default function SearchPage() {
  const [results, search] = useSearch();

  const triggerSearch = useCallback(
    ({ target: { value } }) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        search(value);
      }, tiempo);
    },
    [search]
  );

  return (
    <>
      <ToolBar />
      <Container>
        <SearchBox onSearch={triggerSearch} />
        <SearchResults results={results} />a
      </Container>
    </>
  );
}

function SearchResults({ results }) {
  return results.map(({ id, name }) => <div key={id}>{name}</div>);
}
