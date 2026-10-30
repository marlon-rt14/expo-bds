import {Skeleton} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {View} from "react-native";

export function SkeletonScreen() {
  return (
    <ComponentPlayground name="Skeleton">
      <Container>
        <Skeleton shape="block" width={40} />
        <Skeleton shape="text" lines={3} />
        <Skeleton shape="circle" width={40} size="lg" />
      </Container>
    </ComponentPlayground>
  );
}

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <View
      style={{
        //
        width: "100%",
        // flexDirection: "column",
        gap: 16,
        borderWidth: 1,
      }}
    >
      {children}
    </View>
  );
};
