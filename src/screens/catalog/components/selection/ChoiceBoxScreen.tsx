import {ChoiceBox} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {View} from "react-native";

export function ChoiceBoxScreen() {
  return (
    <ComponentPlayground name="ChoiceBox">
      <View>
        <ChoiceBox label="ChoiceBox" onChange={() => {}} selected />
      </View>
    </ComponentPlayground>
  );
}
