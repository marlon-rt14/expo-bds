import {Image} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

export function ImageScreen() {
  return (
    <ComponentPlayground name="Image">
      <Image
        src={{
          uri: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        alt="image"
        fit="cover"
        ratio="9:16"
      />
      {/* <Image */}
      {/*   src={{ */}
      {/*     uri: "", */}
      {/*   }} */}
      {/*   alt="image" */}
      {/*   fit="cover" */}
      {/*   ratio="9:16" */}
      {/* /> */}
    </ComponentPlayground>
  );
}
