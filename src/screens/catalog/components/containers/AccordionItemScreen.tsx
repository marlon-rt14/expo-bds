import {AccordionItem} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {Text, View} from "react-native";
import {useState} from "react";

export function AccordionItemScreen() {
  const [expanded, setExpanded] = useState(false);

  return (
    <ComponentPlayground name="AccordionItem">
      <View style={{borderWidth: 1, width: "100%"}}>
        <AccordionItem
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          title="Hola mundo"
          icon="phone"
          headingLevel={6}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet luctus venenatis lectus magna fringilla urna
          </Text>
        </AccordionItem>
        <AccordionItem
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          title="Hola mundo - disabled"
          disabled
          icon="phone"
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet luctus venenatis lectus magna fringilla urna
          </Text>
        </AccordionItem>
      </View>
      <View style={{borderWidth: 1, width: "100%"}}>
        <Text>Size</Text>
        <AccordionItem
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          title="Hola mundo - disabled"
          icon="phone"
          size="sm"
          headingLevel={6}
          divider={false}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet luctus venenatis lectus magna fringilla urna
          </Text>
        </AccordionItem>
        <AccordionItem
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          title="Hola mundo - disabled"
          icon="phone"
          headingLevel={6}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet luctus venenatis lectus magna fringilla urna
          </Text>
        </AccordionItem>
      </View>
      <View style={{borderWidth: 1, width: "100%"}}>
        <Text>Apparance</Text>
        <AccordionItem
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          title="Hola mundo - disabled"
          icon="phone"
          appearance="default"
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet luctus venenatis lectus magna fringilla urna
          </Text>
        </AccordionItem>
      </View>
    </ComponentPlayground>
  );
}
