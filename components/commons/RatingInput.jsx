import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import useApi from "hooks/useApi";

export default function SimpleRating({ id }) {
  const [value, setValue] = React.useState(2);
  const api = useApi();
  const [state, setState] = React.useState();

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Puntuacion</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          disabled={state}
          onChange={(event, newValue) => {
            setValue(newValue);
            api.rateMenu(id, newValue);
            setState(true);
          }}
        />
      </Box>
    </div>
  );
}
