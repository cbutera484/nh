<script setup>
import Hamburger from "./Hamburger.vue";
import { useTemplateRef } from "vue";

const menu = useTemplateRef("menu");
function open() {
  menu.value.classList.add("open");
}
function close() {
  menu.value.classList.remove("open");
}
</script>

<template>
  <nav class="justify-between flex">
    <h2>
      <router-link to="/">Huntington Village Cooperative</router-link>
    </h2>
    <ul ref="menu" class="hidden lg:flex flex-row">
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/photo-gallery">Photo Gallery</router-link></li>
      <li><router-link to="/events">Upcoming Events</router-link></li>
      <li><router-link to="/management">Management</router-link></li>
      <li><router-link to="/info">Useful Info</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
  </nav>
  <div class="hamburger-container">
    <Hamburger @open="open" @close="close" />
  </div>
</template>

<style scoped>
@use "../assets/css/variables.scss";

nav {
  background: #fff;
  padding: 2rem;
  border-bottom: 2px solid var(--primary-color);
}
ul.open {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  width: 100%;
  height: 100vh;
  z-index: 100;
}
ul li {
  padding: 0 1rem;
}
h2 a {
  color: var(--primary-color);
}
.hamburger-container {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
