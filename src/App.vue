<script setup lang="ts">
</script>

<template>
  <header>
    <div class="navbar">
      <img class="logo" src="/casabondi.svg"/>
      <a><router-link to="/biblioteca-castenaso/">Home</router-link></a>
      <a><router-link to="/biblioteca-castenaso/calendar">Calendario</router-link></a>
      <a><router-link to="/biblioteca-castenaso/guide">Guida</router-link></a>
      <a><router-link to="/biblioteca-castenaso/contacts">Contatti</router-link></a>
    </div>
    <br>
  </header>
  <main>
    <div class="view">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </main>
</template>

<style>
.slide-enter-active{
    animation: slide-in 2s ease-in-out;
    animation-delay: -1s;
}

@keyframes slide-in{
    from { top: 100rem }
    to { top: 0rem }
 }
</style>
