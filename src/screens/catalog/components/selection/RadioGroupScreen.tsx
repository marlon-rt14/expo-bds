import {RadioGroup} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

export function RadioGroupScreen() {
  const [options, setOptions] = useState<string>();

  return (
    <ComponentPlayground name="RadioGroup">
      <RadioGroup
        value={options}
        legend="Legend"
        options={[
          {label: "Option 1", value: "option-1", media: 'whatsapp'},
          {label: "Option 2", value: "option-2"},
          {
            label: "Lorem Ipsum dolor sit amet consectetur adipiscing elit",
            value: "option-3",
            // description: "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            disabled: true,
          },
        ]}
        onChange={(value) => setOptions(value)}
        // disabled
        size="sm"
        boxLayout="tile"
        helperText="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        // error="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </ComponentPlayground>
  );
}
