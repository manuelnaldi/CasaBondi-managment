import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Calendar from './components/Calendar.vue';
import Contacts from './components/Contacts.vue';
import Home from './components/Home.vue';
import guide from './components/Guide.vue';

const home = Home;
const calendar = Calendar;
const contacts = Contacts;

const routes = [
  { path: '/salastudio-castenaso/', component: home },
  { path: '/salastudio-castenaso/calendar', component: calendar },
  { path: '/salastudio-castenaso/contacts', component: contacts },
  { path: '/salastudio-castenaso/guide', component: guide }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
