import React from "react";
import Link from "next/link";
import { oneOf, arrayOf, shape, number, bool } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import I18n from "components/commons/I18n";

const useStyles = makeStyles(theme => ({
  gridList: {
    horizontal: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)"
    },
    vertical: {
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)"
    }
  }
}));

export default function BusinessList({ business, loading, variant }) {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList[variant]}>
      {business.map(busines => (
        <GridListTile key={busines.id}>
          <img src={busines.img} alt={busines.name} />
          <Link href={`/businesses/${busines.id}`}>
            <GridListTileBar
              title={busines.name}
              actionIcon={
                <IconButton aria-label={`star ${busines.name}`}>
                  <StarBorderIcon />
                </IconButton>
              }
            />
          </Link>
        </GridListTile>
      ))}
      {loading && (
        <GridListTile>
          <GridListTileBar title={<I18n id="businesList.loading" />} />
        </GridListTile>
      )}
    </GridList>
  );
}

BusinessList.propTypes = {
  variant: oneOf(["vertical", "horizontal"]),
  business: arrayOf(shape({ id: number })),
  loading: bool
};

BusinessList.defaultProps = {
  variant: "vertical",
  business: [],
  loading: false
};
