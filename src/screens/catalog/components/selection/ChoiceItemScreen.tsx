import {ChoiceItem} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";
import {View} from "react-native";

export function ChoiceItemScreen() {
  const [selected, setSelected] = useState([{id: "1", selected: true}]);

  const onChange = (id: string) => {
    if (selected.find((item) => item.id === id)) {
      setSelected((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return {...item, selected: !item.selected};
          }
          return item;
        })
      );
    } else {
      setSelected([...selected, {id: id, selected: true}]);
    }
  };

  return (
    <ComponentPlayground name="ChoiceItem">
      <ChoiceItem
        label="ChoiceItem"
        control="checkbox"
        onChange={() => {}}
        selected
        size="sm"
        description="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        trailingText="$100"
        divider
      />
      <ChoiceItem
        label="ChoiceItem"
        control="radio"
        onChange={() => {}}
        selected
        size="md"
      />
      <View style={{borderWidth: 1, width: "100%"}} />
      {Array.from({length: 10}, (_, index) => (
        <ChoiceItem
          key={index}
          label={`ChoiceItem ${index + 1}`}
          control="checkbox"
          onChange={() => onChange((index + 1).toString())}
          selected={selected[index]?.selected}
        />
      ))}
    </ComponentPlayground>
  );
}
