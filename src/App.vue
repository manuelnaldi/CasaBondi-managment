<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <div class="view">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
  import Navbar from "./components/Navbar.vue"
</script>
