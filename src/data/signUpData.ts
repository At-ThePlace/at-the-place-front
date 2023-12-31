import { atom } from "recoil";

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const checkPasswordState = atom({
  key: "checkPasswordState",
  default: "",
});

export const emailMessageState = atom({
  key: "emailMessageState",
  default: "",
});

export const passwordMessageState = atom({
  key: "passwordMessageState",
  default: "",
});

export const passwordErrorState = atom({
  key: "passwordErrorState",
  default: "",
});
