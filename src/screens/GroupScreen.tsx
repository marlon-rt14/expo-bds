import { componentKey, getGroup } from '../catalog';
import { NavList } from '../components';
import type { RootStackScreenProps } from '../navigation';
import { useChecklistStore } from '../store';

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
          onPress: () => navigation.navigate(key),
          checkbox: { checked: !!checked[key], onToggle: () => toggle(key) },
        };
      })}
    />
  );
}
