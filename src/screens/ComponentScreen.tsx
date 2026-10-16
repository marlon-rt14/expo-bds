import { StyleSheet, Text, View } from 'react-native';
import { Button} from '@bds/react-native'

// Placeholder: each component will be tested here one by one.
export function ComponentScreen({ route }: RootStackScreenProps<'Component'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.name}</Text>
      <Button label='Hola mundo' onPress={() => {}}/>
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
