import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    admin: null,
  }),
  persist:true,
  actions: {
    login(admin) {
      this.admin = admin
    },
    logout() {
      this.admin = null
    },
  },
})