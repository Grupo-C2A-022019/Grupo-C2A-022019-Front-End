import React from "react";
import Grid from "@material-ui/core/Grid";

import Profile from "components/Profile";
import ToolBar from "components/ToolBar";

import useProfile from "hooks/useProfile";

export default function ProfilePage() {
  const [profile] = useProfile();
  return (
    <div>
      <ToolBar />
      <Grid container>
        <Grid item xs="12">
          {profile && <Profile {...profile} />}
        </Grid>
      </Grid>
    </div>
  );
}
