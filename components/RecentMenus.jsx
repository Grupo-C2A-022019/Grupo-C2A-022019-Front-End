import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

import I18n from "components/commons/I18n";
import MenuList from "components/MenuList";

import useApi from "hooks/useApi";

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
      <Typography>
        <I18n id="recentMenus.title" />
      </Typography>
      <MenuList menus={menus} variant="horizontal" loading={loading} />
    </>
  );
}

RecentMenus.propTypes = {};

RecentMenus.defaultProps = {};
