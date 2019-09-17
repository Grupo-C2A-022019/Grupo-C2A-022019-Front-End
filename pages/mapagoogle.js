import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import getConfig from "next/config";

export default function mapaGoogle() {
  return <SimpleMap />;
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 69.95,
      lng: 69.33
    },
    zoom: 5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: getConfig().publicRuntimeConfig.googleMapApiKey
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}
