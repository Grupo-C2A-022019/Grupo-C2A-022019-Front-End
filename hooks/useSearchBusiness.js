import useApi from "hooks/useApi";
import { useState, useCallback } from "react";

export default function useSearch() {
  const api = useApi();
  const [results, setResults] = useState([]);

  const search = useCallback(
    searchTerm => api.searchBusiness(searchTerm).then(setResults),
    [api]
  );

  return [results, search];
}
