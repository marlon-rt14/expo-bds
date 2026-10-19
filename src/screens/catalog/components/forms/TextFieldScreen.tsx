import {TextField} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {useState} from "react";

export function TextFieldScreen() {
  const [ query, setQuery ] = useState("");

  return (
    <ComponentPlayground name="TextField">
      <TextField
        label="Ingrese su nombre"
        onChangeText={(value) => setQuery(value)}
        value={query}
      />
    </ComponentPlayground>
  );
}
