import { StyleSheet, Text, View } from 'react-native';

import type { RootStackScreenProps } from '../navigation/types';

// Placeholder: each component will be tested here one by one.
export function ComponentScreen({ route }: RootStackScreenProps<'Component'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
});
