import {SwitchItem} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

export function SwitchItemScreen() {
  const [checked, setChecked] = useState(false);
  return (
    <ComponentPlayground name="SwitchItem">
      <SwitchItem
        checked={checked}
        label="SwitchItem"
        onChange={setChecked}
        description="Lorem Ipsum dolor sit amet consectetur adipiscing elit"
        // disabled
        leading={{icon: 'whatsapp'}}
        divider
        size="md"
      />
    </ComponentPlayground>
  );
}
