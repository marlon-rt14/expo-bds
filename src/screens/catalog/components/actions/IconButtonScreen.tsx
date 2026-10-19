import {Alert} from "react-native";
import {IconButton} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function IconButtonScreen() {
  return (
    <ComponentPlayground name="IconButton">
      <IconButton
        icon="whatsapp"
        label="Hola mundo"
        onPress={() => Alert.alert("Hola mundo")}
      />
    </ComponentPlayground>
  );
}
