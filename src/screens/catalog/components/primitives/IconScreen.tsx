import {Icon} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function IconScreen() {
  return (
    <ComponentPlayground name="Icon">
      <Icon
        name="search-md"
        color="component.textarea.helper.text-warning"
        colorValue="#FF0000"
        size="lg"
        systemIcon="volume"
        label="ComponentPlayground"
      />
    </ComponentPlayground>
  );
}
