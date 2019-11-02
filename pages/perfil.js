import React from "react";
import Grid from "@material-ui/core/Grid";

import Profile from "components/Profile";
import useProfile from "hooks/useProfile";
import ToolBar from "../components/ToolBar";

export default function ProfilePage() {
  const [profile] = useProfile();

  return (
    <div>
      <ToolBar />
      <Grid container spacing={3}>
        <Grid item xs="9">
          {profile && <Profile {...profile} />}
        </Grid>
      </Grid>
    </div>
  );
}
