<template>
  <div>
    <v-card-title class="text-h4 mb-4">Portfolio Showcase</v-card-title>
    
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card>
          <v-img
            :src="project.image"
            height="200"
            cover
          ></v-img>
          
          <v-card-title>{{ project.title }}</v-card-title>
          
          <v-card-text>
            <p>{{ project.description }}</p>
            <v-chip-group>
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                color="primary"
                small
              >
                {{ tech }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          
          <v-card-actions>
            <v-btn
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              color="primary"
              variant="text"
            >
              Live Demo
            </v-btn>
            <v-btn
              v-if="project.github"
              :href="project.github"
              target="_blank"
              variant="text"
            >
              GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'CODE-X',
    description: 'A full-stack web application e-commerce built with Java, Bootstrap, and MySQL for our finals project in Web Development. This is a web application that allows users to create, edit, and delete user inputs.',
    image: '../images/CODEX.jpeg',
    technologies: ['Java', 'Bootstrap', 'MySQL'],
    demo: 'https://drive.google.com/file/d/1C9wyjj_P2N6UYmMzu1p5GZY9C41nhVNq/view?usp=sharing',
    github: ''
  },
  {
    id: 2,
    title: 'Automated Student Helper',
    description: 'A web application built with Python, Flask, and Facebook Messenger. This is a web application that allows users to chat with an AI chatbot and was made to answers my classmates queries.',
    image: '../images/ASH.jpg',
    technologies: ['Python', 'Flask', 'Facebook Messenger'],
    demo: 'https://drive.google.com/file/d/1NC82seI8idhIQ34HEemQKpyCqGhDKSxl/view?usp=sharing',
    github: 'https://github.com/runesai/fb-tbot'
  },
  {
    id: 3,
    title: 'Student Assistant Bot',
    description: 'An AI Voice Assistant built with Python, Tensorflow, and Tkinter for our Project Design 2 subject in PUP - Institute of Technology. This is a voice assistant answers to user queries about the college registrar.',
    image: '../images/SAB.jpg',
    technologies: ['Python', 'Tensorflow', 'Tkinter'],
    demo: 'https://drive.google.com/file/d/1KukuZiBzsKcRO8LvtDQwmd1Rect6jzfq/view?usp=drive_link',
    github: 'https://github.com/m-raine-i/SAB'
  }
])
</script> 