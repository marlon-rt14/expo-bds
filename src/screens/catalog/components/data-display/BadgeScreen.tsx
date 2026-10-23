import {Badge} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {View} from "react-native";

export function BadgeScreen() {
  return (
    <ComponentPlayground name="Badge">
      <Badge count={1} />
      <Badge count={10} />
      <Badge count={100} />
      <Badge count={10000} max={100} />

      <View style={{flexDirection: "row", gap: 8}}>
        <Badge count={1} status="danger" />
        <Badge count={1} status="neutral" />
        <Badge count={1} status="info" />
        <Badge count={1} status="brand" />
        <Badge count={1} status="warning" />
        <Badge count={1} status="success" />
      </View>
      <View style={{flexDirection: "row", gap: 8}}>
        <Badge count={1} status="danger" type={"dot"} />
        <Badge count={1} status="neutral" type={"dot"} />
        <Badge count={1} status="info" type={"dot"} />
        <Badge count={1} status="brand" type={"dot"} />
        <Badge count={1} status="warning" type={"dot"} />
        <Badge count={1} status="success" type={"dot"} />
      </View>
    </ComponentPlayground>
  );
}
