import { ReactNode } from "react";
import { atom } from "recoil";

interface BottomSheetState {
  isOpen: boolean;
  content: ReactNode | null;
}

export const bottomSheetState = atom<BottomSheetState>({
  key: "bottomSheetState",
  default: {
    isOpen: false,
    content: null,
  },
});
