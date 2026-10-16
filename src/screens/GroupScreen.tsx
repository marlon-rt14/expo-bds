import { getGroup } from '../catalog/catalog';
import { NavList } from '../components/NavList';
import type { RootStackScreenProps } from '../navigation/types';

export function GroupScreen({ navigation, route }: RootStackScreenProps<'Group'>) {
  const group = getGroup(route.params.sectionId, route.params.groupId);
  if (!group) return null;

  return (
    <NavList
      items={group.components.map((name) => ({
        key: name,
        label: name,
        onPress: () => navigation.navigate('Component', { name }),
      }))}
    />
  );
}
