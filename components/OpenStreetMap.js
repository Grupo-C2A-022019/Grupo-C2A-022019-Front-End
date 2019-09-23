import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import L from "leaflet";

class MapComponent extends Component {
  state = {
    lat: -34.6012307,
    lng: -58.3975367,
    zoom: 13
  };
  road = [
    L.latLng(-34.6012307, -58.3975367),
    L.latLng(-34.6257703, -58.3923897)
  ];
  map = React.createRef();
  defaultIcon = L.icon({});
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} ref={this.map}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.road.map((point, index) => (
          <Marker key={index} position={point} />
        ))}
        <RoutingMachine color="#000" map={this.map} road={this.road} />
      </Map>
    );
  }
}

export default MapComponent;
