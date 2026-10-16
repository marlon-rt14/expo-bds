import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getGroup, getSection } from '../catalog/catalog';
import { ComponentScreen } from '../screens/ComponentScreen';
import { GroupScreen } from '../screens/GroupScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SectionScreen } from '../screens/SectionScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'bDS' }} />
        <Stack.Screen
          name="Section"
          component={SectionScreen}
          options={({ route }) => ({ title: getSection(route.params.sectionId)?.title ?? '' })}
        />
        <Stack.Screen
          name="Group"
          component={GroupScreen}
          options={({ route }) => ({
            title: getGroup(route.params.sectionId, route.params.groupId)?.title ?? '',
          })}
        />
        <Stack.Screen
          name="Component"
          component={ComponentScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
