import {Accordion, AccordionItemData} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {Alert, Text} from "react-native";

const data: AccordionItemData[] = [
  {
    id: "1",
    title: "Hola mundo",
    icon: "plus",
    children: <Text>hola</Text>,
  },
  {
    id: "2",
    title: "Hola mundo 2",
    icon: "plus",
    children: <Text>hola</Text>,
  },
  {
    id: "3",
    title: "Hola mundo 3",
    icon: "plus",
    children: <Text>hola</Text>,
  },
];

export function AccordionScreen() {
  return (
    <ComponentPlayground name="Accordion">
      <Accordion
        items={data}
        headingLevel={6}
        // expanded={["1", "2"]}
        allowMultiple={true}
        // onExpandedChange={(e) => Alert.alert("Hola mundo")}
      />
    </ComponentPlayground>
  );
}
