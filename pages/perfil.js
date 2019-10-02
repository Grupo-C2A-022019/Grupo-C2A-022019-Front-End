import React from "react";
import Container from "@material-ui/core/Container";

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
      <Container>
        <Orders />

        <MenuDesplegable />
      </Container>
    </div>
  );
}
