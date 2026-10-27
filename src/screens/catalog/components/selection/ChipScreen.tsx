import {Chip} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";
import {View} from "react-native";

export function ChipScreen() {
  const [selected, setSelected] = useState(false);

  return (
    <ComponentPlayground name="Chip">
      <Chip
        label="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        selected={selected}
        onToggle={(value) => setSelected(value)}
        size="xs"
        leadingIcon="search-md"
      />
      <View style={{flexDirection: "row", gap: 8}}>
        <Chip
          label="Chip Label"
          selected={selected}
          onToggle={(value) => setSelected(value)}
          leadingIcon="search-md"
          size="sm"
          disabled
        />
        <Chip
          label="Chip Label"
          selected={selected}
          onToggle={(value) => setSelected(value)}
          size="sm"
          onRemove={() => {}}
        />
      </View>
    </ComponentPlayground>
  );
}
