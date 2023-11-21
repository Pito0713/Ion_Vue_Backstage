import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useStore = defineStore("Main", {
  state: () => ({
    defaultLanguage: "zh-TW",
  }),
  getters: {},
  actions: {
    defaultLanguageChange(e) {
      Cookies.set("language", e);
      this.defaultLanguage = e;
      window.location.reload();
    },
  },
});
