<script setup></script>

<template>
  <nav class="flex justify-between">
    <h2><router-link to="/">Huntington Village Cooperative</router-link></h2>
    <ul class="flex flex-row">
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/photo-gallery">Photo Gallery</router-link></li>
      <li><router-link to="/events">Upcoming Events</router-link></li>
      <li><router-link to="/management">Management</router-link></li>
      <li><router-link to="/info">Useful Info</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #fff;
  padding: 2rem;
  border-bottom: 2px solid rgb(128 151 0);
}
ul li {
  padding: 0 1rem;
}
</style>
