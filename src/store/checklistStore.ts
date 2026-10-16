import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ChecklistState {
  checked: Record<string, boolean>;
  toggle: (key: string) => void;
}

// Keys are scoped by section so names never collide across Components/Charts/Patterns.
export function componentKey(sectionId: string, name: string): string {
  return `${sectionId}/${name}`;
}

export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set) => ({
      checked: {},
      toggle: (key) => set((state) => ({ checked: { ...state.checked, [key]: !state.checked[key] } })),
    }),
    {
      name: 'checklist',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
