<script setup lang="ts">
</script>

<template>
  <header>
    <div class="navbar">
      <img class="logo" src="/casabondi.svg"/>

      <div class="home">
        <div class="icon-house">
          <i class="fa-solid fa-house"></i>
        </div>
        <a><router-link to="/salastudio-castenaso/">Home</router-link></a>
      </div>

      <div class="calendar">
        <div class="icon-calendar">
          <i class="fa-solid fa-calendar"></i>
        </div>
        <a><router-link to="/salastudio-castenaso/calendar">Calendario</router-link></a>
      </div>

      <div class="guide">
        <div class="icon-guide">
          <i class="fa-solid fa-book-open"></i>
        </div>
        <a><router-link to="/salastudio-castenaso/guide">Guida</router-link></a>
      </div>
      
      <div class="contacts">
        <div class="icon-contacts">
          <i class="fa-solid fa-address-card"></i>
        </div>
        <a><router-link to="/salastudio-castenaso/contacts">Contatti</router-link></a>
      </div>
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
.icon-house, .icon-calendar, .icon-guide, .icon-contacts{
  text-align: center;
  color: black;
}

.slide-enter-active{
    animation: slide-in 2s ease-in-out;
    animation-delay: -1s;
}

@keyframes slide-in{
    from { top: 100rem }
    to { top: 0rem }
 }
</style>
