import React from "react";
import Grid from "@material-ui/core/Grid";

import Profile from "components/Profile";
import ToolBar from "components/ToolBar";
import StatementList from "components/commons/StatementList";

import useProfile from "hooks/useProfile";
import useStatements from "hooks/useStatements";

export default function ProfilePage() {
  const [profile] = useProfile();
  const [statements] = useStatements();

  return (
    <div>
      <ToolBar />
      <Grid container spacing={3}>
        <Grid item xs="9">
          {profile && <Profile {...profile} />}
          <StatementList statements={statements} />
        </Grid>
      </Grid>
    </div>
  );
}
