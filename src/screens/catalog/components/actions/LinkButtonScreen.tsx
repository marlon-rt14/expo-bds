import {Text, View} from 'react-native'
import {LinkButton} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function LinkButtonScreen() {
  return (
    <ComponentPlayground name="LinkButton">
      <LinkButton label="Hola mundo" onPress={() => {}} />
      <LinkButton label="Hola mundo" onPress={() => {}} disabled />
      <LinkButton
        label="Hola mundo"
        onPress={() => {}}
        leadingIcon="whatsapp"
        trailingIcon="whatsapp"
      />
      <View style={{borderWidth: 1}}>
      <Text>Tallas</Text>
        <LinkButton label="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" onPress={() => {}} size="sm" />
        <LinkButton label="Hola mundo" onPress={() => {}} size="md" />
        <LinkButton label="Hola mundo" onPress={() => {}} size="lg" />
      </View>
    </ComponentPlayground>
  );
}
