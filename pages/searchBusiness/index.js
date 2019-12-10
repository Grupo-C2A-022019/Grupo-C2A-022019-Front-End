import React, { useCallback } from "react";
import { Container } from "@material-ui/core";

import debounce from "lib/debounce";

import SearchBox from "components/commons/SearchBox";
import ToolBar from "components/ToolBar";
import BusinessList from "components/BusinessList";

import useSearchBusiness from "hooks/useSearchBusiness";

export default function SearchPage() {
  const [results, search] = useSearchBusiness();

  const onSearch = useCallback(debounce(search, 500), [search]);

  return (
    <>
      <ToolBar />
      <Container>
        <SearchBox onSearch={onSearch} />
        <SearchResults results={results} />
      </Container>
    </>
  );
}

function SearchResults({ results }) {
  return <BusinessList business={results} variant="horizontal" />;
}
