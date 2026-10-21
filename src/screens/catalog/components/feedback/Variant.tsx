import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

export const noop = () => {};

export function Variants({ children }: { children: ReactNode }) {
  return <View style={{ alignSelf: 'stretch', width: '100%', gap: 24 }}>{children}</View>;
}

export function Variant({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={{ alignSelf: 'stretch', gap: 8 }}>
      <Text style={{ fontSize: 12, color: '#5c6570' }}>{label}</Text>
      {children}
    </View>
  );
}
