import {MerchantAvatar} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {View} from "react-native";

export function MerchantAvatarScreen() {
  return (
    <ComponentPlayground name="MerchantAvatar">
      <View style={{flexDirection: "row", gap: 8}}>
        <MerchantAvatar
          name="Centrohub"
          category="seguros"
          icon="whatsapp"
          type="icon"
          src={{
            uri: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
        />
        <MerchantAvatar
          name="Centrohub"
          category="seguros"
          icon="whatsapp"
          type="initials"
          src={{
            uri: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
          size="lg"
        />
      </View>
    </ComponentPlayground>
  );
}
