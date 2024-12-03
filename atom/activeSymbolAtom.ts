import { atom } from "recoil";

interface ActiveSymbolState {
  symbol: string;
  price: string;
}

export const activeSymbolState = atom<ActiveSymbolState>({
  key: "activeSymbolState",
  default: {
    symbol: "",
    price: "",
  },
});
