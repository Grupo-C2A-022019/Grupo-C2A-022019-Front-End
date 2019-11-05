import React from "react";
import { useRouter } from "next/router";
import { Container, Paper, Typography } from "@material-ui/core";

import ToolBar from "components/ToolBar";
import MenuList from "components/MenuList";

import useBusiness from "hooks/useBusiness";
import useBusinessMenus from "hooks/useBusinessMenus";

export default function BusinessPage() {
  const {
    query: { id }
  } = useRouter();

  const [business] = useBusiness(id);
  const [menus, { loading: loadingMenus }] = useBusinessMenus(id);

  return (
    <>
      <ToolBar />
      <Container>
        {business && <BusinessDetails business={business} />}
        <MenuList menus={menus} variant="horizontal" loading={loadingMenus} />
      </Container>
    </>
  );
}

function BusinessDetails({ business: { name, description } }) {
  return (
    <Paper>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
    </Paper>
  );
}
