<template>
  <v-container fluid fill-height class="d-flex align-center justify-center" style="height: 100vh;">
    <v-card width="400" class="pa-4">
      <v-card-title class="text-center text-h5 mb-4">
        Login to Portfolio
      </v-card-title>

      <v-form @submit.prevent="handleSubmit" v-model="isFormValid">
        <v-text-field
          v-model="username"
          label="Username"
          :rules="[v => !!v || 'Username is required']"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          :rules="[v => !!v || 'Password is required']"
          required
        ></v-text-field>

        <v-alert
          v-if="error"
          type="error"
          class="mb-4"
        >
          {{ error }}
        </v-alert>

        <v-btn
          block
          color="primary"
          type="submit"
          :disabled="!isFormValid"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')
const isFormValid = ref(false)

const handleSubmit = () => {
  error.value = ''
  
  if (authStore.login(username.value, password.value)) {
    router.push('/portfolio/profile')
  } else {
    error.value = 'Invalid username or password'
  }
}
</script> 

