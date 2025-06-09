<template>
  <div>
    <v-card-title class="text-h4 mb-4">Blog Posts</v-card-title>
    
    <v-row>
      <v-col
        v-for="post in posts"
        :key="post.id"
        cols="12"
        md="6"
      >
        <v-card>
          <v-img
            :src="post.image"
            height="200"
            cover
          ></v-img>
          
          <v-card-title>{{ post.title }}</v-card-title>
          
          <v-card-subtitle class="d-flex align-center">
            <v-icon size="small" class="me-1">mdi-calendar</v-icon>
            {{ post.date }}
            <v-spacer></v-spacer>
            <v-chip
              size="small"
              color="primary"
            >
              {{ post.category }}
            </v-chip>
          </v-card-subtitle>
          
          <v-card-text>
            <p>{{ post.excerpt }}</p>
          </v-card-text>
          
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="expandPost(post.id)"
            >
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
      v-model="dialog"
      max-width="800"
    >
      <v-card v-if="selectedPost">
        <v-img
          :src="selectedPost.image"
          height="300"
          cover
        ></v-img>
        
        <v-card-title>{{ selectedPost.title }}</v-card-title>
        
        <v-card-subtitle>
          <v-icon size="small" class="me-1">mdi-calendar</v-icon>
          {{ selectedPost.date }}
          <v-chip
            size="small"
            color="primary"
            class="ms-2"
          >
            {{ selectedPost.category }}
          </v-chip>
        </v-card-subtitle>
        
        <v-card-text>
          <p>{{ selectedPost.content }}</p>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const selectedPost = ref(null)

const posts = ref([
  {
    id: 1,
    title: 'GDG Build with AI 2025',
    date: 'May 24, 2025',
    category: 'Gemini 2.0 API',
    image: '../images/GDG.jpg',
    excerpt: 'My experience with building AI chatbots (Gemini 2.0) in GDG...',
    content: "Before this day ends, I just want to say that I was glad to be a part of Google Developer Groups on Campus PUP's Build with AI 2025 event. At first, I was torn kung saan ba ako pupunta kasi nag-announce na may class din kami on the day of the event then biglang nag-online. \n It was nice to meet to other people and exchange socials with them. I think this is also the first time I went to an event by myself, without anyone I knew personally, which was interesting because it was obvious that I was driven to be here by my passion, personal agendas, and our thesis HAHA. Though I found that the workshop shared knowledge that I was already somehow aware of, it did broaden the ways of how I can program an AI Chatbot more. Other than game dev, this was something that I already took an interest in since first year in ITech and now will be our thesis (pray for us that we can accomplish this prototype in less than 3 weeks). \n Shoutout to the friends that I've made along the way and who adopted me into their team. Kahit last minute na tayo nagkaroon ng composure as a team and kahit di na tayo nakapag-present ng gawa natin, I'm still glad we accomplished our task. I'm glad to have worked with you all and it was nice to meet all of you!"
  },
  // {
  //   id: 2,
  //   title: 'Modern Web Development Practices',
  //   date: 'March 10, 2024',
  //   category: 'Web Dev',
  //   image: 'https://via.placeholder.com/400x200',
  //   excerpt: 'Explore the latest trends in web development...',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  // },
  // {
  //   id: 3,
  //   title: 'Building Responsive UIs',
  //   date: 'March 5, 2024',
  //   category: 'UI/UX',
  //   image: 'https://via.placeholder.com/400x200',
  //   excerpt: 'Tips and tricks for creating responsive user interfaces...',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  // }
])

const expandPost = (postId) => {
  selectedPost.value = posts.value.find(post => post.id === postId)
  dialog.value = true
}
</script> 