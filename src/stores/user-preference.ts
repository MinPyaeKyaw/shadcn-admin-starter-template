import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface State {
  sidebarCollapsed: boolean;
  lang: Lang;
  changeLang: (lang: Lang) => void;
  toggleSidebar: () => void;
}

const useUserPreference = create<State>()(
  devtools(
    persist(
      (set) => ({
        lang: "en",
        sidebarCollapsed: false,
        changeLang: (lang: Lang) => set((state) => ({ ...state, lang })),
        toggleSidebar: () =>
          set((state) => ({
            ...state,
            sidebarCollapsed: !state.sidebarCollapsed,
          })),
      }),
      {
        name: "user-preference",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useUserPreference;
