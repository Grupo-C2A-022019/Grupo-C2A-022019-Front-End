import React from "react";
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

export default function MenuList({ menus, loading, variant }) {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList[variant]}>
      {menus.map(menu => (
        <GridListTile key={menu.id}>
          <img src={menu.img} alt={menu.name} />
          <GridListTileBar
            title={menu.name}
            actionIcon={
              <IconButton aria-label={`star ${menu.name}`}>
                <StarBorderIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
      {loading && (
        <GridListTile>
          <GridListTileBar title={<I18n id="menuList.loading" />} />
        </GridListTile>
      )}
    </GridList>
  );
}

MenuList.propTypes = {
  variant: oneOf(["vertical", "horizontal"]),
  menus: arrayOf(shape({ id: number })),
  loading: bool
};

MenuList.defaultProps = {
  variant: "vertical",
  menus: [],
  loading: false
};
