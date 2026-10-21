import {Button, ButtonGroup} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {View} from "react-native";

export function ButtonGroupScreen() {
  return (
    <ComponentPlayground name="ButtonGroup">
      <View style={{borderWidth: 1, width: "100%" }}>
        <ButtonGroup layout="fitted" orientation="horizontal">
          <Button label="Hola" onPress={() => {}} />
          <Button label="Mundo" onPress={() => {}} />
        </ButtonGroup>
      </View>
    </ComponentPlayground>
  );
}
