import React, { Component } from "react";
import GoogleMapReact, { DirectionsRenderer } from "google-map-react";
import getConfig from "next/config";

export default function mapaGoogle() {
  return <SimpleMap />;
}

const Foo = ({ children }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {children}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.85073,
      lng: -87.65126
    },
    zoom: 15
  };

  state = {
    directions: null
  };

  setDirections = () => {
    // eslint-disable-next-line no-undef
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        // eslint-disable-next-line no-undef
        origin: new google.maps.LatLng(41.85073, -87.65126),
        // eslint-disable-next-line no-undef
        destination: new google.maps.LatLng(41.85258, -87.65141),
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        // eslint-disable-next-line no-undef
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  render() {
    const { directions } = this.state;
    debugger;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: getConfig().publicRuntimeConfig.googleMapApiKey
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={this.setDirections}
          yesIWantToUseGoogleMapApiInternals
        >
          <Foo lat={-34.601297} lng={-58.363833}>
            sarasa
          </Foo>
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMapReact>
      </div>
    );
  }
}
