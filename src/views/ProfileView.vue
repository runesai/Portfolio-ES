<template>
  <v-card class="pa-4">
    <v-card-title class="text-h4 mb-4">Profile</v-card-title>
    <v-row>
      <v-col cols="12" md="4">
        <v-avatar size="200" class="mb-4 ml-12">
          <v-img src="../images/Profile.jpg" alt="Profile"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <v-list>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon>mdi-account</v-icon>
            </template>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>Trishia Sai R. Mejia</v-list-item-subtitle>
          </v-list-item>
          
          <v-list-item>
            <template v-slot:prepend>
              <v-icon>mdi-briefcase</v-icon>
            </template>
            <v-list-item-title>Position</v-list-item-title>
            <v-list-item-subtitle>Computer Engineering Student</v-list-item-subtitle>
          </v-list-item>
          
          <v-list-item>
            <template v-slot:prepend>
              <v-icon>mdi-email</v-icon>
            </template>
            <v-list-item-title>Email</v-list-item-title>
            <v-list-item-subtitle>trishiasai@gmail.com</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        
        <v-card-text>
          <p class="text-h6">About Me</p>
          <p>
            A creative and adaptable student who loves writing and learning about AI and Game Development. Willing to learn and will continue to live my way into where I'm meant to be. 
          </p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template> 