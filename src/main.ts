import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import {createBootstrap} from 'bootstrap-vue-next'
import './style.scss'
import App from './App.vue'
import Calendar from './views/Calendar.vue';
import Contacts from './views/Contacts.vue';
import Home from './views/Home.vue';

export const baseRoute = "/salastudio-castenaso/";
export const calendarRoute = baseRoute + "calendar";
export const contactsRoute = baseRoute + "contacts";

const routes = [
  { path: baseRoute, component: Home },
  { path: calendarRoute, component: Calendar },
  { path: contactsRoute, component: Contacts }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
app.use(router);
app.use(createBootstrap());
app.mount('#app');
