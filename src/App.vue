<script setup lang="ts">
  import { BNavbar, BNavbarBrand, BNavbarNav } from "bootstrap-vue-next"
  import { baseRoute, calendarRoute, guideRoute, contactsRoute } from "./main.ts"
</script>

<template>
  <header>
    <BNavbar 
      variant="primary"
      fixed="top"
    >
      <BNavbarBrand 
        :to="baseRoute"
      >
        Sala Studio
      </BNavbarBrand>
      <BCollapse is-nav> 
        <BNavbarNav>
          <BNavItem :to="calendarRoute">
            Calendario
          </BNavItem>
          <BNavItem :to="guideRoute">
            Guida
          </BNavItem>
          <BNavItem :to="contactsRoute">
            Contatti
          </BNavItem>
        </BNavbarNav>
      </BCollapse> 
    </BNavbar>
  </header>
  <main>
    <div class="view">
      <router-view></router-view>
    </div>
  </main>
</template>

