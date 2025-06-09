<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Portfolio Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="handleLogout">
        <v-icon>mdi-logout</v-icon>
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const drawer = ref(true)

const menuItems = [
  { title: 'Profile', icon: 'mdi-account', to: '/portfolio/profile' },
  { title: 'Showcase', icon: 'mdi-view-grid', to: '/portfolio/showcase' },
  { title: 'Contact', icon: 'mdi-email', to: '/portfolio/contact' },
  { title: 'Blog', icon: 'mdi-post', to: '/portfolio/blog' }
]

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script> 