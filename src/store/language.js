// // Utilities
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  id: 'language', // unique id of the store
  state: () => ({
    spanish: true,
  }),
  actions: {
    setLanguage(status) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.spanish = status;
          resolve();
        }, 250);
      });
    },
  },
  getters: {
    getLanguage() {
      return this.spanish;
    },
  },
})
