import { componentKey, getSection } from '../catalog';
import { NavList } from '../components';
import type { RootStackScreenProps } from '../navigation';
import { useChecklistStore, useChecklistSync } from '../store';

export function SectionScreen({ navigation, route }: RootStackScreenProps<'Section'>) {
  const checked = useChecklistStore((state) => state.checked);
  const toggle = useChecklistStore((state) => state.toggle);
  useChecklistSync();

  const section = getSection(route.params.sectionId);
  if (!section) return null;

  // Groups get a read-only checkbox that is checked once all of their components are.
  // Sections without subgroups (e.g. Patterns) list their components directly, with a toggleable checkbox.
  // Sections outside the checklist (e.g. Demos) get no checkbox at all.
  const withChecklist = section.checklist !== false;
  const items =
    section.kind === 'groups'
      ? section.groups.map((group) => ({
          key: group.id,
          label: group.title,
          onPress: () => navigation.navigate('Group', { sectionId: section.id, groupId: group.id }),
          checkbox: withChecklist
            ? { checked: group.components.every((name) => checked[componentKey(section.id, name)]) }
            : undefined,
        }))
      : section.components.map((name) => {
          const key = componentKey(section.id, name);
          return {
            key: name,
            label: name,
            onPress: () => navigation.navigate(key),
            checkbox: withChecklist ? { checked: !!checked[key], onToggle: () => toggle(key) } : undefined,
          };
        });

  return <NavList items={items} />;
}
