import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  
  actions: {
    login(username, password) {
      // Hardcoded credentials for demo
      if (username === 'admin' && password === 'password123') {
        this.isAuthenticated = true
        this.user = {
          username: 'admin',
          name: 'Admin User'
        }
        return true
      }
      return false
    },
    
    logout() {
      this.isAuthenticated = false
      this.user = null
    }
  }
}) 