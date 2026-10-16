import { catalog } from '../catalog';
import { NavList } from '../components';
import type { RootStackScreenProps } from '../navigation';

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
