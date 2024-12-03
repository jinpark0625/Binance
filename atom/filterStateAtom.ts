import { atom } from "recoil";

interface FilterState {
  priceUnit: string;
  orderOption: string;
}

export const filterState = atom<FilterState>({
  key: "filterState",
  default: {
    priceUnit: "0.1",
    orderOption: "Limit",
  },
});
