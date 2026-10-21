import {View} from "react-native";
import {Image} from "expo-image";
import {Host, Text, Button as RnButton} from "@expo/ui";
import {Button} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {GlassView} from "expo-glass-effect";
import {buttonStyle, glassEffect} from "@expo/ui/swift-ui/modifiers";

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
        <Button
          label="Hola mundo"
          onPress={() => {}}
          appearance="glass-prominent"
        />
        <Host matchContents>
          <RnButton
            onPress={() => {}}
            modifiers={[
              buttonStyle("glass"),
              glassEffect({glass: {variant: "clear", interactive: true},shape: 'capsule'}),
            ]}
          >
            <Text style={{padding: 10}}>Click me </Text>
          </RnButton>
        </Host>
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
