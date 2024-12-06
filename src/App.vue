<template>
  <header>
    <div class="navbar">

      <div class="home">
        <div class="icon-house">
          Home
        </div>
        <a><router-link to="/salastudio-castenaso/">Home</router-link></a>
      </div>

      <div class="calendar">
        <div class="icon-calendar">
          Calendar
        </div>
        <a><router-link to="/salastudio-castenaso/calendar">Calendario</router-link></a>
      </div>

      <div class="guide">
        <div class="icon-guide">
          Guide
        </div>
        <a><router-link to="/salastudio-castenaso/guide">Guida</router-link></a>
      </div>
      
      <div class="contacts">
        <div class="icon-contacts">
          Contacts
        </div>
        <a><router-link to="/salastudio-castenaso/contacts">Contatti</router-link></a>
      </div>
    </div>
    <br>
  </header>
  <main>
    <div class="view">
      <router-view></router-view>
    </div>
  </main>
</template>

