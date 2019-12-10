import React, { useCallback, useState, useEffect, useMemo } from "react";
import { Container } from "@material-ui/core";

import debounce from "lib/debounce";

import SearchBox from "components/commons/SearchBox";
import ToolBar from "components/ToolBar";
import MenuList from "components/MenuList";

import useSearch from "hooks/useSearch";
import Pagination from "components/commons/Pagination";

function PaginationWrapper({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {children}
    </div>
  );
}

const size = 2;
export default function SearchPage() {
  const [page, setPage] = useState(0);
  const [q, setQ] = useState("");
  const [results, search] = useSearch();
  const debouncedSearch = useMemo(() => debounce(search, 500), [search]);

  useEffect(() => {
    debouncedSearch({
      q,
      offset: page * size,
      size
    });
  }, [q, page, debouncedSearch]);

  return (
    <>
      <ToolBar />
      <Container>
        <PaginationWrapper>
          <Pagination current={page} total={20} onChange={setPage} />
        </PaginationWrapper>
        <SearchBox onSearch={setQ} />
        <SearchResults results={results} />
      </Container>
    </>
  );
}

function SearchResults({ results }) {
  return <MenuList menus={results} variant="horizontal" />;
}
