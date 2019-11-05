import { useState, useEffect } from "react";
import useApi from "./useApi";

export default function useBusinessMenus(id) {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = useApi();

  useEffect(() => {
    api
      .fetchBusinessMenus(id)
      .then(setMenus)
      .finally(() => setLoading(false));
  }, [api, id]);

  return [menus, { loading }];
}
