import {Checkbox} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";
import {Alert} from "react-native";

export function CheckboxScreen() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentPlayground name="Checkbox">
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Checkbox"
        size="sm"
      />
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Checkbox"
        size="md"
      />
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Checkbox"
        size="md"
        disabled
      />
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        size="md"
      />
      <Checkbox
        checked={checked}
        onChange={setChecked}
        label="Checkbox Link"
        size="md"
        links={[{text: "Link", onPress: () => Alert.alert("Link Pressed")}]}
      />
    </ComponentPlayground>
  );
}
