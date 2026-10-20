import {Button, Card} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {Text, View} from "react-native";

export function CardScreen() {
  return (
    <ComponentPlayground name="Card">
      <View>
        <Card elevation="flat" padding="none">
          <View>
            <Button label="Clic me" onPress={() => console.log("click")} />
            <Text>Lorem ipsum dolor sit amet</Text>
          </View>
        </Card>
      </View>
    </ComponentPlayground>
  );
}
