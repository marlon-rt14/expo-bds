import { getGroup } from '../catalog/catalog';
import { NavList } from '../components/NavList';
import type { RootStackScreenProps } from '../navigation/types';
import { componentKey, useChecklistStore } from '../store/checklistStore';

export function GroupScreen({ navigation, route }: RootStackScreenProps<'Group'>) {
  const checked = useChecklistStore((state) => state.checked);
  const toggle = useChecklistStore((state) => state.toggle);

  const { sectionId, groupId } = route.params;
  const group = getGroup(sectionId, groupId);
  if (!group) return null;

  return (
    <NavList
      items={group.components.map((name) => {
        const key = componentKey(sectionId, name);
        return {
          key: name,
          label: name,
          onPress: () => navigation.navigate('Component', { name }),
          checkbox: { checked: !!checked[key], onToggle: () => toggle(key) },
        };
      })}
    />
  );
}
