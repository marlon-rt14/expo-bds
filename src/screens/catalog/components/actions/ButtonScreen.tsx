import {View} from "react-native";
import {Image} from "expo-image";
import {Button} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function ButtonScreen() {
  return (
    <ComponentPlayground name="Button">
      <View style={{borderWidth: 1, width: "100%", flex: 1}}>
        <View
          style={{
            borderWidth: 1,
            height: 300,
            width: "100%",
            position: "absolute",
          }}
        >
          <Image
            source={"https://picsum.photos/300/200"}
            style={{width: "100%", height: "100%"}}
          />
        </View>
        {/* <Button label="Hola mundo" onPress={() => {}} /> */}
        {/* <Button label="Hola mundo" onPress={() => {}} variant='danger' /> */}
        <Button label="Hola mundo" onPress={() => {}} appearance="glass" />
        <Button label="Hola mundo" onPress={() => {}} appearance="glass-prominent" />
        {/* <Button label="Hola mundo" onPress={() => {}} loading /> */}
        <View style={{marginTop: 350}}>
          <Button
            label="Hola mundo"
            onPress={() => {}}
            leadingIcon="whatsapp"
            trailingIcon="whatsapp"
            fullWidth
          />
        </View>
      </View>
    </ComponentPlayground>
  );
}
