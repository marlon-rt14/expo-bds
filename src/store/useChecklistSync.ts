import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import { useChecklistStore } from './checklistStore';

// Pulls checklist.json every time the screen gains focus, so changes from other devices show up.
export function useChecklistSync() {
  const sync = useChecklistStore((state) => state.sync);
  useFocusEffect(
    useCallback(() => {
      sync();
    }, [sync]),
  );
}
