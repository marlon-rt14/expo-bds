import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { allComponents, getGroup, getSection } from '../catalog';
import { componentScreens, GroupScreen, HomeScreen, SectionScreen } from '../screens';
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
        {allComponents.map(({ key, name }) => (
          <Stack.Screen key={key} name={key} component={componentScreens[key]} options={{ title: name }} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
