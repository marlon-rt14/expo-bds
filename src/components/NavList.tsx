import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export interface NavListItem {
  key: string;
  label: string;
  onPress: () => void;
}

interface NavListProps {
  items: NavListItem[];
}

export function NavList({ items }: NavListProps) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.key}
      contentInsetAdjustmentBehavior="automatic"
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <Pressable
          accessibilityRole="button"
          onPress={item.onPress}
          style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
        >
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.chevron}>›</Text>
        </Pressable>
      )}
    />
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  rowPressed: {
    backgroundColor: '#f2f2f2',
  },
  label: {
    fontSize: 16,
  },
  chevron: {
    fontSize: 20,
    color: '#999',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 16,
    backgroundColor: '#ddd',
  },
});
