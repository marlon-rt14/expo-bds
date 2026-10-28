import {CheckboxGroup} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

export function CheckboxGroupScreen() {
  const [options, setOptions] = useState<string[]>([]);
  return (
    <ComponentPlayground name="CheckboxGroup">
      <CheckboxGroup
        value={options}
        legend="Legend"
        options={[
          {label: "Option 1", value: "option-1"},
          {label: "Option 2", value: "option-2"},
          {
            label: "Lorem Ipsum dolor sit amet consectetur adipiscing elit",
            value: "option-3",
            // description: "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            disabled: true
          },
        ]}
        onChange={(value) => setOptions(value)}
        // disabled
        size="sm"
        helperText="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        // error="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </ComponentPlayground>
  );
}
