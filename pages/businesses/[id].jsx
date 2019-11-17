import React, { useCallback } from "react";
import { Container, Button, Grid, Paper, Typography } from "@material-ui/core";

import { useRouter } from "next/router";

import ToolBar from "components/ToolBar";
import I18n from "components/commons/I18n";
import Image from "components/commons/Image";
import MenuList from "components/MenuList";

import useBusiness from "hooks/useBusiness";
import useBusinessMenus from "hooks/useBusinessMenus";

export default function BusinessPage() {
  const {
    query: { id }
  } = useRouter();

  const [menus, { loading: loadingMenus }] = useBusinessMenus(id);

  return (
    <>
      <ToolBar />
      <Container>
        <BusinessDetails id={id} />
        <MenuList menus={menus} variant="horizontal" loading={loadingMenus} />
      </Container>
    </>
  );
}

function BusinessDetails({ id }) {
  const [business] = useBusiness(id);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={9}>
        <Paper>
          {business && (
            <>
              <Typography variant="h3">{business.name}</Typography>
              <Typography variant="h4">{business.description}</Typography>
              <Image src={business.img} alt="business" />

              <Typography variant="h5">
                <I18n id="business.urlServ.label" />
              </Typography>
              <Typography>{business.urlServ}</Typography>
              <Typography variant="h5">
                <I18n id="business.email.label" />
              </Typography>
              <Typography>{business.email}</Typography>
              <Typography variant="h5">
                <I18n id="business.schedule.label" />
              </Typography>
              <Typography>{business.schedule}</Typography>
              <Typography variant="h5">
                <I18n id="business.telephone.label" />
              </Typography>
              <Typography>{business.telephone}</Typography>
            </>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper>
          <PublishMenuButton businessId={id} />
        </Paper>
      </Grid>
    </Grid>
  );
}

function PublishMenuButton({ businessId }) {
  const { push } = useRouter();

  const publishMenu = useCallback(() => {
    push(`/menus/new?businessId=${businessId}`);
  }, [push, businessId]);

  return (
    <Button onClick={publishMenu} variant="contained" color="primary">
      <I18n id="business.menu.new.label" />
    </Button>
  );
}
