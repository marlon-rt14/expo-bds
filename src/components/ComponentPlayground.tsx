import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

interface ComponentPlaygroundProps {
  name: string;
  children?: ReactNode;
  /** `start` deja la lista arriba para poder scrollear todas las variantes. `center` es el default (Button). */
  align?: 'center' | 'start';
}

// Shared layout for the per-component screens: shows the component name and whatever is rendered as children.
export function ComponentPlayground({ name, children, align = 'center' }: ComponentPlaygroundProps) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={[styles.content, align === 'start' && styles.start]}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text style={styles.title}>{name}</Text>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 16,
  },
  start: {
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
  },
});
