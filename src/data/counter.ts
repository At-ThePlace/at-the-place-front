import { atom } from "recoil";

export const storedCounter = atom({
  key: "counter",
  default: 0,
});
