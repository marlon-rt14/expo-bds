import {Spinner} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function SpinnerScreen() {
  return (
    <ComponentPlayground name="Spinner">
      <Spinner appearance="brand" size="sm" />
      <Spinner appearance="on-brand" size="md" />
      <Spinner appearance="primary" colorValue="red" size="lg" label="Loading..." />
    </ComponentPlayground>
  );
}
