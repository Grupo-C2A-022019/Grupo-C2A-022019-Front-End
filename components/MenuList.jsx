import React from "react";
import { oneOf, arrayOf, shape, number, bool } from "prop-types";

export default function MenuList({ menus, loading }) {
  return (
    <ul>
      {menus.map(menu => (
        <li>menu: {menu.id}</li>
      ))}
      {loading && <li>Obteniendo Menuses...</li>}
    </ul>
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
