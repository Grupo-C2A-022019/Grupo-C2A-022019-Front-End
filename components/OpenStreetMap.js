import React, { useMemo } from "react";
import { Map, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import L from "leaflet";

function OpenStreetMap() {
  const waypoints = useMemo(() => [
    L.latLng(-34.6012307, -58.3975367),
    L.latLng(-34.6257703, -58.3923897)
  ]);

  const bounds = useMemo(() => L.latLngBounds(...waypoints), [waypoints]);

  return (
    <Map bounds={bounds}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <RoutingMachine waypoints={waypoints} />
    </Map>
  );
}

export default OpenStreetMap;
