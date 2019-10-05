import React, { useEffect, useState } from "react";

import MenuList from "components/MenuList";

import useApi from "hooks/useApi";
import { Typography } from "@material-ui/core";

export default function RecentMenus() {
  const [loading, setLoading] = useState(true);

  const [menus, setMenus] = useState([]);
  const api = useApi();

  useEffect(() => {
    api
      .fetchRecentMenus()
      .then(setMenus)
      .finally(() => setLoading(false));
  }, [api]);

  return (
    <>
      <Typography>Nuevas Delicias</Typography>
      <MenuList menus={menus} variant="horizontal" loading={loading} />
    </>
  );
}

RecentMenus.propTypes = {};

RecentMenus.defaultProps = {};
