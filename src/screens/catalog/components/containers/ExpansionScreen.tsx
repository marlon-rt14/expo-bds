import {Button, Expansion} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {Text, View} from "react-native";

export function ExpansionScreen() {
  return (
    <ComponentPlayground name="Expansion">
      <Expansion
        label="Ver mássss"
        expandedLabel="Ver menossss"
        // expanded={false}
        // defaultExpanded={true}
        size="sm"
      >
        <View>
          <Button label="Clic me" onPress={() => console.log("click")} />
          <Text>Lorem ipsum dolor sit amet</Text>
        </View>
      </Expansion>
      <Expansion
        label="Ver mássss"
        expandedLabel="Ver menossss"
        // expanded={false}
        // defaultExpanded={true}
        size="md"
      >
        <View>
          <Button label="Clic me" onPress={() => console.log("click")} />
          <Text>Lorem ipsum dolor sit amet</Text>
        </View>
      </Expansion>
    </ComponentPlayground>
  );
}
