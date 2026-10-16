import { Pressable, StyleSheet, Text } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onToggle?: () => void;
  disabled?: boolean;
}

export function Checkbox({ checked, onToggle, disabled = false }: CheckboxProps) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      disabled={disabled}
      onPress={onToggle}
      hitSlop={12}
      style={[styles.box, checked && styles.boxChecked, disabled && styles.boxDisabled]}
    >
      {checked && <Text style={styles.mark}>✓</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    borderColor: '#1a73e8',
    backgroundColor: '#1a73e8',
  },
  boxDisabled: {
    opacity: 0.4,
  },
  mark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
