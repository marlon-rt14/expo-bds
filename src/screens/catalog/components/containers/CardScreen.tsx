import {Button, Card} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {Text, View} from "react-native";

export function CardScreen() {
  return (
    <ComponentPlayground name="Card">
      <View style={{backgroundColor: 'transparent', width: "100%", flex: 1}}>
        <Card elevation="raised" onPress={() => console.log("click")}>
          <View>
            <Button label="Clic me" onPress={() => console.log("click")} />
            <Text>Lorem ipsum dolor sit amet</Text>
          </View>
        </Card>
      </View>
    </ComponentPlayground>
  );
}
