import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { Checkbox } from './Checkbox';

export interface NavListItem {
  key: string;
  label: string;
  onPress: () => void;
  // Without onToggle the checkbox is rendered disabled (read-only).
  checkbox?: { checked: boolean; onToggle?: () => void };
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
          <View style={styles.leading}>
            {item.checkbox && (
              <Checkbox
                checked={item.checkbox.checked}
                onToggle={item.checkbox.onToggle}
                disabled={!item.checkbox.onToggle}
              />
            )}
            <Text style={styles.label}>{item.label}</Text>
          </View>
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
  leading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
