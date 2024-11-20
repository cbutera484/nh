<script setup>
import Hamburger from "./Hamburger.vue";
import { useTemplateRef, ref } from "vue";

const menu = useTemplateRef("menu");
const isOpen = ref(false);

function toggleMenu() {
  if (!isOpen.value) {
    open();
  } else {
    close();
  }
}
function open() {
  menu.value.classList.add("open");
  window.setTimeout(() => {
    menu.value.classList.add("opacity-100");
  }, 100);
  isOpen.value = true;
}
function close() {
  menu.value.classList.remove("opacity-100");
  menu.value.addEventListener(
    "transitionend",
    () => {
      menu.value.classList.remove("open");
    },
    { once: true }
  );
  isOpen.value = false;
}

import { onMounted } from "vue";

onMounted(() => {
  const links = menu.value.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      close();
    });
  });
});
</script>

<template>
  <nav class="justify-between flex">
    <h2 class="text-xl xl:text-2xl">
      <router-link to="/">Huntington Village Cooperative</router-link>
    </h2>
    <ul
      ref="menu"
      class="hidden lg:flex flex-row opacity-0 lg:opacity-100 mt-2 text-sm xl:text-base"
    >
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/photo-gallery">Photo Gallery</router-link></li>
      <li><router-link to="/events">Upcoming Events</router-link></li>
      <li><router-link to="/management">Management</router-link></li>
      <li><router-link to="/info">Useful Info</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
  </nav>
  <div class="hamburger-container">
    <Hamburger @hamburger-clicked="toggleMenu" :is-open="isOpen" />
  </div>
</template>

<style scoped>
@use "../assets/css/variables.scss";

nav {
  background: #fff;
  padding: 2rem;
  border-bottom: 2px solid var(--primary-color);
}
ul {
  transition: opacity 0.5s ease-in-out;
}
@media (max-width: 1024px) {
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
  ul.open li {
    border-bottom: 1px solid var(--primary-color);
    padding: 2rem 0;
  }
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
  z-index: 101;
  right: 0.5rem;
}
</style>
