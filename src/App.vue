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
      <router-view></router-view>
    </div>
  </main>
</template>


