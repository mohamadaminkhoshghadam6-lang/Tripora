
import { create } from "zustand";

type AppState = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  menuOpen: false,
  setMenuOpen: (value) => set({ menuOpen: value }),
}));
