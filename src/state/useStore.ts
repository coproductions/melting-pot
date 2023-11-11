import { StateCreator, create } from 'zustand'
import { defaultTheme } from '../themes/default-theme';

type AppState = {
    theme: any;
    setTheme: (theme: any) => void;
}

export const useStore = create<AppState>((set) => ({
  theme: defaultTheme,
  setTheme: (theme: any) => set(() => ({ theme })),
}))
