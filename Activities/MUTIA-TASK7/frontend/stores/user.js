import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: '',
  }),
  persist:true,
  actions: {
    login(user) {
      this.user = user
    },
  },
});

