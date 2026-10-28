import {Switch} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

export function SwitchScreen() {
  const [checked, setChecked] = useState(false);
  return (
    <ComponentPlayground name="Switch">
      <Switch checked={checked} onChange={setChecked} label="Notifications" />
      <Switch
        checked={checked}
        onChange={setChecked}
        label="Notifications"
        disabled
      />
      <Switch
        checked={checked}
        onChange={setChecked}
        label="Notifications"
        stateLabel={{on: "ON", off: "OFF"}}
        size="sm"
      />
      <Switch
        checked={checked}
        onChange={setChecked}
        label="Notifications"
        stateLabel={{on: "ON", off: "OFF"}}
        size="md"
      />
    </ComponentPlayground>
  );
}
