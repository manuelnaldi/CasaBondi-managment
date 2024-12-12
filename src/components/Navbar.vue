<template>
    <BNavbar 
      variant="primary"
      fixed="bottom"
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
            Calendario <i class="bi bi-calendar-event-fill ms-1 me-2"></i>
          </BNavItem>
          <BNavItem :to="contactsRoute">
            Contatti <i class="bi bi-person-lines-fill ms-1"></i>
          </BNavItem>
        </BNavbarNav>
      </BCollapse> 
    </BNavbar>
</template>

<script setup lang="ts">
  import { BNavbar, BNavbarBrand, BNavbarNav } from "bootstrap-vue-next"
  import { baseRoute, calendarRoute, contactsRoute } from "../main.ts"
</script>
