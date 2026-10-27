import {Radio} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

export function RadioScreen() {
  const [selected, setSelected] = useState(false);

  return (
    <ComponentPlayground name="Radio">
      <Radio
        label="Radio"
        onSelect={() => setSelected(prev => !prev)}
        selected={selected}
        value="1"
      />
    </ComponentPlayground>
  );
}
