import { create } from "zustand";

interface ScreenState {
  width: number;
  height: number;
  shouldWrap: boolean;
  setSize: (width: number, height: number) => void;
}

// Keep in sync with the .page-layout media query in index.css
const MOBILE_BREAKPOINT = 960;

const useScreenStore = create<ScreenState>((set) => ({
  width: window.innerWidth,
  height: window.innerHeight,
  shouldWrap: window.innerWidth < MOBILE_BREAKPOINT, // default
  setSize: (width, height) => set({ width, height, shouldWrap: width < MOBILE_BREAKPOINT }),
}));

export default useScreenStore;
