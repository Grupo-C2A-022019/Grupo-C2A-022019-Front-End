import React from "react";
import Grid from "@material-ui/core/Grid";
import ToolBar from "components/ToolBar";
import StatementList from "components/commons/StatementList";

import useStatements from "hooks/useStatements";

export default function ProfilePage() {
  const [statements] = useStatements();

  return (
    <>
      <ToolBar />
      <Grid container>
        <Grid item xs={9}>
          <StatementList statements={statements} />
        </Grid>
      </Grid>
    </>
  );
}
