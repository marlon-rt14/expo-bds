import { componentKey, getGroup, getSection } from '../catalog';
import { NavList } from '../components';
import type { RootStackScreenProps } from '../navigation';
import { useChecklistStore, useChecklistSync } from '../store';

export function GroupScreen({ navigation, route }: RootStackScreenProps<'Group'>) {
  const checked = useChecklistStore((state) => state.checked);
  const toggle = useChecklistStore((state) => state.toggle);
  useChecklistSync();

  const { sectionId, groupId } = route.params;
  const group = getGroup(sectionId, groupId);
  if (!group) return null;
  const withChecklist = getSection(sectionId)?.checklist !== false;

  return (
    <NavList
      items={group.components.map((name) => {
        const key = componentKey(sectionId, name);
        return {
          key: name,
          label: name,
          onPress: () => navigation.navigate(key),
          checkbox: withChecklist ? { checked: !!checked[key], onToggle: () => toggle(key) } : undefined,
        };
      })}
    />
  );
}
