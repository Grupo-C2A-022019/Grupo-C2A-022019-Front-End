import React from "react";
import Link from "next/link";

import { Button } from "@material-ui/core";

import RecentMenus from "components/RecentMenus";
import I18n from "components/commons/I18n";

export default function HomePage() {
  return (
    <>
      <Link href="/menus/new">
        <Button variant="contained" color="primary">
          <I18n id="menu.new" />
        </Button>
      </Link>
      <RecentMenus />
    </>
  );
}
