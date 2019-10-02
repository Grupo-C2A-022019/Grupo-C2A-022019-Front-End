import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import MenuDesplegable from "../components/Perfil/MenuDesplegable";
import Orders from "../components/Perfil/Orders";
import ToolBar from "../components/ToolBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "right",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
}));

export default function Perfil() {
  const classes = useStyles();
  return (
    <div>
      <ToolBar />
      <Grid container spacing={3}>
        <Grid item xs="2">
          <MenuDesplegable />
        </Grid>
        <Grid item xs="9">
          <Orders />
        </Grid>
      </Grid>
    </div>
  );
}
