import {TagGroup, TagProps} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import { useState } from "react";

const tags: TagProps[] = [
  {label: "Centrohub", appearance: "fill", size: "sm", leadingIcon: 'receipt-fill'},
  {label: "Centrohub", appearance: "fill", size: "xs"},
  {label: "Centrohub", appearance: "fill", onRemove: () => console.log("remove")},
  {label: "Centrohub", appearance: "fill"},
  {label: "Centrohub", appearance: "fill"},
  {label: "Centrohub", appearance: "fill"},
  {label: "Centrohub", appearance: "fill"},
  {label: "Centrohub", appearance: "fill"},
];

export function TagGroupScreen() {
  const [expanded, setExpanded] = useState(false);
  return (
    <ComponentPlayground name="TagGroup">
      <TagGroup
        tags={[
          ...tags,
          {
            label:
              "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
        ]}
        // defaultExpanded={true}
        expanded={expanded}
        max={3}
        onExpandedChange={() => setExpanded(!expanded)}
        size="sm"
      />
    </ComponentPlayground>
  );
}
