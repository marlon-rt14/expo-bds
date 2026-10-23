import {AvatarGroup, AvatarProps} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";

const avatars: AvatarProps[] = [
  {name: "María José Andrade"},
  {name: "Carlos Pérez"},
  {name: "Ana Torres"},
];

export function AvatarGroupScreen() {
  return (
    <ComponentPlayground name="AvatarGroup">
      <AvatarGroup avatars={avatars} max={3} size="lg" />
    </ComponentPlayground>
  );
}
