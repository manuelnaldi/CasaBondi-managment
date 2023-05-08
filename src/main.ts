import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Calendar from './components/Calendar.vue';
import Contacts from './components/Contacts.vue';
import Home from './components/Home.vue';

const home = Home;
const calendar = Calendar;
const contacts = Contacts;

const routes = [
  { path: '/biblioteca-castenaso/', component: home },
  { path: '/biblioteca-castenaso/calendar', component: calendar },
  { path: '/biblioteca-castenaso/contacts', component: contacts }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
