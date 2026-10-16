import { catalog } from '../catalog/catalog';
import { NavList } from '../components/NavList';
import type { RootStackScreenProps } from '../navigation/types';

export function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <NavList
      items={catalog.map((section) => ({
        key: section.id,
        label: section.title,
        onPress: () => navigation.navigate('Section', { sectionId: section.id }),
      }))}
    />
  );
}
