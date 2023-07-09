<script setup></script>

<template>
  <nav class="flex justify-between">
    <h2><router-link to="/">Huntington Village Cooperative</router-link></h2>
    <ul class="flex flex-row">
      <li><router-link to="/about">About</router-link></li>
      <li>Photo Gallery</li>
      <li>Management</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: #fff;
  padding: 2rem;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.7);
  border-bottom: 2px solid rgb(128 151 0);
}
ul li {
  padding: 0 1rem;
}
</style>
