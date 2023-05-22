import { create } from 'zustand';

type State = {
  sidebar: boolean;
  falseSidebar: () => void;
  trueSidebar: () => void;
};

export const sidebarStore = create<State>((set) => ({
  sidebar: false,
  falseSidebar: () => set((state) => ({ sidebar: false })),
  trueSidebar: () => set((state) => ({ sidebar: true })),
}));
