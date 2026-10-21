import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { fetchRemoteChecklist, saveRemoteCheck } from './checklistRemote';

interface ChecklistState {
  checked: Record<string, boolean>;
  toggle: (key: string) => void;
  sync: () => Promise<void>;
}

function toRecord(keys: string[]): Record<string, boolean> {
  return Object.fromEntries(keys.map((key) => [key, true]));
}

// AsyncStorage keeps a local copy; checklist.json in the repo (through Metro) is the shared source of truth.
export const useChecklistStore = create<ChecklistState>()(
  persist(
    (set, get) => ({
      checked: {},
      toggle: (key) => {
        const next = !get().checked[key];
        set((state) => ({ checked: { ...state.checked, [key]: next } }));
        saveRemoteCheck(key, next)
          .then((keys) => keys && set({ checked: toRecord(keys) }))
          .catch((error) => console.warn('[checklist] Could not save to dev server, kept locally.', error));
      },
      sync: async () => {
        try {
          const keys = await fetchRemoteChecklist();
          if (keys) set({ checked: toRecord(keys) });
        } catch (error) {
          console.warn('[checklist] Could not reach dev server, using local copy.', error);
        }
      },
    }),
    {
      name: 'checklist',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ checked: state.checked }),
    },
  ),
);
