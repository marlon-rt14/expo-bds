import {SwitchGroup, SwitchGroupItem} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

const items: SwitchGroupItem[] = [
  {key: "1", checked: true, label: "Option 1"},
  {key: "2", checked: true, label: "Option 2"},
  {
    key: "3",
    checked: true,
    label: "Option 3",
    description: "Description",
    leading: {
      // icon: "whatsapp",
      avatar: {src: {uri: "https://randomuser.me/api/portraits/men/1.jpg"}},
    },
  },
  {key: "4", checked: true, label: "Option 4"},
];

export function SwitchGroupScreen() {
  const [itemsState, setItemsState] = useState(items);

  const handleChange = (key: string, checked: boolean) => {
    setItemsState(
      itemsState.map((item) => {
        if (item.key === key) {
          return {...item, checked};
        }
        return item;
      })
    );
  };

  return (
    <ComponentPlayground name="SwitchGroup">
      <SwitchGroup
        items={itemsState}
        legend="Grupo de items"
        onChange={handleChange}
        // disabled
        // size="sm"
        helperText="Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </ComponentPlayground>
  );
}
