import { useState, useEffect } from "react";
import useApi from "./useApi";

export default function useStatements() {
  const api = useApi();
  const [statements, setStatements] = useState([]);

  useEffect(() => {
    api.fetchStatements().then(setStatements);
  }, [api]);

  return [statements];
}
