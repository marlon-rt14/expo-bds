import {Divider} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {View} from "react-native";

export function DividerScreen() {
  return (
    <ComponentPlayground name="Divider">
      <View style={{width: "100%", flexDirection: "column", gap: 16}}>
        <Divider appearance="strong" />
        <Divider appearance="subtle" />
        <Divider appearance="default" />
      </View>
      <View style={{width: "100%", height: 100, flexDirection: "row", gap: 16}}>
        <Divider orientation="vertical" appearance="strong" />
        <Divider orientation="vertical" appearance="subtle" />
        <Divider orientation="vertical" appearance="default" />
      </View>
    </ComponentPlayground>
  );
}
