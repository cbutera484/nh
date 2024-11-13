<script setup></script>

<template>
  <nav class="md:flex justify-between hidden">
    <h2>
      <router-link to="/">Huntington Village Cooperative</router-link>
    </h2>
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
@use "../assets/css/variables.scss";

nav {
  background: #fff;
  padding: 2rem;
  border-bottom: 2px solid var(--primary-color);
}
ul li {
  padding: 0 1rem;
}
h2 a {
  color: var(--primary-color);
}
</style>
