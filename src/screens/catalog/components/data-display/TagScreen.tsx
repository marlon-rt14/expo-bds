import {Tag, TagProps} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {View} from "react-native";

export function TagScreen() {
  return (
    <ComponentPlayground name="Tag">
      <Row>
        <Tag label="Centrohub" appearance="fill" />
        <Tag label="Centrohub" appearance="outline" />
        <Tag label="Centrohub" appearance="soft" />
      </Row>
      <Row>
        <Tag
          label="Centrohub"
          appearance="fill"
          leadingIcon="search-md"
          onRemove={() => console.log("remove")}
        />
        <Tag label="Centrohub" appearance="outline" />
        <Tag label="Centrohub" appearance="soft" />
      </Row>
      <Row>
        <Tag label="Centrohub" size="sm" />
        <Tag label="Centrohub" size="xs" />
      </Row>
      <Tag label="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      <Row>
        <Tag label="neutral" palette="neutral" />
        <Tag label="info" palette="info" />
        <Tag label="aqua" palette="aqua" />
        <Tag label="indigo" palette="indigo" />
        <Tag label="danger" palette="danger" />
        <Tag label="tangerine" palette="tangerine" />
        <Tag label="brand" palette="brand" />
        <Tag label="success" palette="success" />
        <Tag label="warning" palette="warning" />
      </Row>
    </ComponentPlayground>
  );
}

const Row = ({children}: {children: React.ReactNode}) => (
  <View style={{flexDirection: "row", gap: 8, flexWrap: "wrap"}}>
    {children}
  </View>
);

const CustomTag = (props: TagProps) => <Tag {...props} />;
