import { create } from "zustand";

type UiState = {
  navigationOpen: boolean;
  setNavigationOpen: (open: boolean) => void;
  toggleNavigation: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  navigationOpen: true,
  setNavigationOpen: (navigationOpen) => set({ navigationOpen }),
  toggleNavigation: () => set((state) => ({ navigationOpen: !state.navigationOpen })),
}));
