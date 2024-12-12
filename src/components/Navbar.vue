<template>
    <BNavbar 
      variant="primary"
      fixed="top"
      class="navbar navbar-dark"
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
          <BNavItem :to="contactsRoute">
            Contatti
          </BNavItem>
        </BNavbarNav>
      </BCollapse> 
    </BNavbar>
</template>

<script setup lang="ts">
  import { BNavbar, BNavbarBrand, BNavbarNav } from "bootstrap-vue-next"
  import { baseRoute, calendarRoute, contactsRoute } from "../main.ts"
  
</script>
