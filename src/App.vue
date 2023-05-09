<script setup lang="ts">
</script>

<template>
    <div class="navbar">
      <img class="logo" src="/casabondi.svg"/>
      <a><router-link to="/biblioteca-castenaso/">Home</router-link></a>
      <a><router-link to="/biblioteca-castenaso/calendar">Calendario</router-link></a>
      <a><router-link to="/biblioteca-castenaso/contacts">Contatti</router-link></a>
    </div>
    <br>
    <div class="view">
      <router-view></router-view>
    </div>
</template>


