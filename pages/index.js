import React from "react";
import Link from "next/link";

import { Button, Container } from "@material-ui/core";

import RecentMenus from "components/RecentMenus";
import I18n from "components/commons/I18n";
import ToolBar from "components/ToolBar";

export default function HomePage() {
  return (
    <>
      <ToolBar />
      <Container>
        <Link href="/menus/new">
          <Button variant="contained" color="primary">
            <I18n id="menu.new" />
          </Button>
        </Link>
        <Link href="/businesses/new">
          <Button variant="contained" color="primary">
            <I18n id="business.new" />
          </Button>
        </Link>
        <RecentMenus />
      </Container>
    </>
  );
}
