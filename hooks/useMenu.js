import { useState, useEffect } from "react";
import useApi from "./useApi";

export default function useMenu(id) {
  const [menu, setMenu] = useState();

  const api = useApi();

  useEffect(() => {
    api.fetchMenu(id).then(setMenu);
  }, [api, id]);

  return [menu];
}
