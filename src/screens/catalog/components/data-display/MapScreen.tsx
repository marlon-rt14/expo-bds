import {Map, MapPin} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function MapScreen() {
  return (
    <ComponentPlayground name="Map">
      <Map
        latitude={-0.1807}
        longitude={-78.4678}
        label="Supermaxi El Bosque"
        ratio="16:9"
        opensMaps
      />
      {/* <MapPin /> */}
    </ComponentPlayground>
  );
}
