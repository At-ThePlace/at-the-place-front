import { atom } from "recoil";

export const storedCounter = atom({
  key: "counter",
  default: 0,
});

export const storedCount = atom({
  key: "count",
  default: 0,
});
