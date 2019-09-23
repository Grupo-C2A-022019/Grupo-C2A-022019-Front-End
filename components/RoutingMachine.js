import { MapLayer } from "react-leaflet";
import L from "leaflet";
import { withLeaflet } from "react-leaflet";
import "leaflet-routing-machine/src";

/**
 * http://www.liedman.net/leaflet-routing-machine/api/
 */
class RoutingMachine extends MapLayer {
  createLeafletElement() {
    const {
      leaflet: { map },
      ...props
    } = this.props;

    let leafletElement = L.Routing.control({
      ...props
    }).addTo(map);

    return leafletElement.getPlan();
  }
}

export default withLeaflet(RoutingMachine);
