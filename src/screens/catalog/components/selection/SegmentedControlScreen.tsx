import {SegmentedControl, SegmentOption} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

const options: SegmentOption[] = [
  {key: "1", label: "Option 1", disabled: false, icon: "search-md"},
  {key: "2", label: "Option 2", disabled: true, icon: "search-md"},
  {key: "3", label: "Option 3", disabled: false},
  {key: "4", label: "Lorem Ipsum dolor sit amet", disabled: false},
];

export function SegmentedControlScreen() {
  const [value, setValue] = useState<string>("");
  return (
    <ComponentPlayground name="SegmentedControl">
      <SegmentedControl
        options={options}
        onChange={setValue}
        value={value}
        appearance="brand"
        content="icon-text"
      />
    </ComponentPlayground>
  );
}
