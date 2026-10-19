import {Alert, View} from "react-native";
import {IconButton} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function IconButtonScreen() {
  
  return (
    <ComponentPlayground name="IconButton">
      <View style={{flexDirection: "row", borderWidth: 1, gap: 10}}>
        <IconButton
          icon="whatsapp"
          label="Hola mundo"
          onPress={() => Alert.alert("Hola mundo")}
          size="xs"
        />
        <IconButton
          icon="whatsapp"
          label="Hola mundo"
          onPress={() => Alert.alert("Hola mundo")}
          size="sm"
        />
        <IconButton
          icon="whatsapp"
          label="Hola mundo"
          onPress={() => Alert.alert("Hola mundo")}
          size="md"
        />
        <IconButton
          icon="whatsapp"
          label="Hola mundo"
          onPress={() => Alert.alert("Hola mundo")}
          size="lg"
        />
      </View>
    </ComponentPlayground>
  );
}
