import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { ComponentKey } from '../catalog';

export type RootStackParamList = {
  Home: undefined;
  Section: { sectionId: string };
  Group: { sectionId: string; groupId: string };
} & {
  // One route per component, named by its catalog key (e.g. "components/Button").
  [key: ComponentKey]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
