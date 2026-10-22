import {Text, View} from "react-native";
import {FloatingActionButton} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {Host, ScrollView} from "@expo/ui";

export function FloatingActionButtonScreen() {
  return (
    <ComponentPlayground name="FloatingActionButton">
      <View style={{borderWidth: 1, width: "100%", flex: 1}}>
        <Host style={{flex: 1}}>
          <ScrollView >
            <Text>Hola mundo</Text>
            <Text>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </Text>
          </ScrollView>
        </Host>
        <FloatingActionButton
          label="Hola mundo"
          icon="plus"
          art={undefined}
          onPress={() => {}}
        />
      </View>
    </ComponentPlayground>
  );
}
