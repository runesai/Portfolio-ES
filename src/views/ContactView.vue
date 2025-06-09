<template>
  <div>
    <v-card-title class="text-h4 mb-4">Contact Me</v-card-title>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-form @submit.prevent="handleSubmit" v-model="isFormValid">
            <v-text-field
              v-model="form.name"
              label="Name"
              :rules="[v => !!v || 'Name is required']"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              :rules="[
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid'
              ]"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="form.subject"
              label="Subject"
              :rules="[v => !!v || 'Subject is required']"
              required
            ></v-text-field>
            
            <v-textarea
              v-model="form.message"
              label="Message"
              :rules="[v => !!v || 'Message is required']"
              required
            ></v-textarea>
            
            <v-btn
              type="submit"
              color="primary"
              block
              :disabled="!isFormValid"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>Contact Information</v-card-title>
          
          <v-list>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-email</v-icon>
              </template>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>trishiasai@gmail.com</v-list-item-subtitle>
            </v-list-item>
            
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-phone</v-icon>
              </template>
              <v-list-item-title>Phone</v-list-item-title>
              <v-list-item-subtitle>09763586942</v-list-item-subtitle>
            </v-list-item>
            
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-map-marker</v-icon>
              </template>
              <v-list-item-title>Location</v-list-item-title>
              <v-list-item-subtitle>Pasig, Philippines</v-list-item-subtitle>
            </v-list-item>
          </v-list>
          
          <v-card-title class="mt-4">Social Media</v-card-title>
          <v-card-actions>
            <v-btn icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/trishia-sai-mejia" target="_blank"></v-btn>
            <v-btn icon="mdi-github" variant="text" href="https://github.com/runesai" target="_blank"></v-btn>
            <v-btn icon="mdi-facebook" variant="text" href="https://www.facebook.com/saiii.sama/" target="_blank"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isFormValid = ref(false)
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Here you would typically send the form data to a backend server
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script> 