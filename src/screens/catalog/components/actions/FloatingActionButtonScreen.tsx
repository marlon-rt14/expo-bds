import {Text} from "react-native";
import {FloatingActionButton} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function FloatingActionButtonScreen() {
  return (
    <ComponentPlayground name="FloatingActionButton">
    <Text>Hola mundo</Text>
    <Text>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
      <FloatingActionButton label="Hola mundo" icon="whatsapp" onPress={() => {}} />
    </ComponentPlayground>
  );
}
