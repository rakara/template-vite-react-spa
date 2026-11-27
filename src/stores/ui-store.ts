import { create } from "zustand";
import { persist } from "zustand/middleware";

type UiState = {
  compactMode: boolean;
  toggleCompactMode: () => void;
};

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      compactMode: false,
      toggleCompactMode: () => set((state) => ({ compactMode: !state.compactMode })),
    }),
    { name: "application-ui-preferences" },
  ),
);
