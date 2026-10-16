import { getSection } from '../catalog/catalog';
import { NavList } from '../components/NavList';
import type { RootStackScreenProps } from '../navigation/types';

export function SectionScreen({ navigation, route }: RootStackScreenProps<'Section'>) {
  const section = getSection(route.params.sectionId);
  if (!section) return null;

  // Sections without subgroups (e.g. Patterns) list their components directly.
  const items =
    section.kind === 'groups'
      ? section.groups.map((group) => ({
          key: group.id,
          label: group.title,
          onPress: () => navigation.navigate('Group', { sectionId: section.id, groupId: group.id }),
        }))
      : section.components.map((name) => ({
          key: name,
          label: name,
          onPress: () => navigation.navigate('Component', { name }),
        }));

  return <NavList items={items} />;
}
