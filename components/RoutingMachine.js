import { MapLayer } from "react-leaflet";
import L from "leaflet";
import { withLeaflet } from "react-leaflet";
import "leaflet-routing-machine/src";

/**
 * http://www.liedman.net/leaflet-routing-machine/api/
 */
class RoutingMachine extends MapLayer {
  createLeafletElement({ leaflet: { map }, ...props }) {
    this.leafletElement = L.Routing.control({
      ...props
    }).addTo(map);

    return this.leafletElement.getPlan();
  }

  updateLeafletElement(fromProps, { waypoints }) {
    this.leafletElement.setWaypoints(waypoints);
  }
}

export default withLeaflet(RoutingMachine);
