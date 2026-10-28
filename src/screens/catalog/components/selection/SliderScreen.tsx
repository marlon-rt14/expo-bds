import {Slider} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";
import { Text } from "react-native";

export function SliderScreen() {
  const [value, setValue] = useState(10);

  return (
    <ComponentPlayground name={ `Slider ${value}` }>
      <Slider
        value={value}
        onValueChange={setValue}
        accessibilityLabel="Slider"
        trailing={<Text>-</Text>}
        leading={<Text>+</Text>}
        // disabled
        step={1}
        showValueIndicator 
        // max={50}
        // min={20}
        // formatValue={(value) => "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      />
    </ComponentPlayground>
  );
}
