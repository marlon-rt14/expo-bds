import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {RootNavigator} from "./src/navigation";
import {BdsProvider} from "@bds/react-native";

export default function App() {
  return (
    <BdsProvider>
      <SafeAreaProvider>
        <RootNavigator />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </BdsProvider>
  );
}
