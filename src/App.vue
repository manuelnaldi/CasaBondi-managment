<script setup lang="ts">
</script>

<template>
    <div class="navbar">
      <img class="logo" src="/casabondi.svg"/>
      <a><router-link to="/">Home</router-link></a>
      <a><router-link to="/calendar">Calendario</router-link></a>
      <a><router-link to="/contacts">Contatti</router-link></a>
    </div>
    <br>
    <div class="view">
      <router-view></router-view>
    </div>
</template>


