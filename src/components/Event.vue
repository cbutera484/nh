<script setup>
defineProps({
  title: String,
  dateTime: String,
  image: String,
  description: String,
});
</script>
<template>
  <h2>{{ title }}</h2>
  <h3>{{ dateTime }}</h3>
  <img v-if="image" :src="image" alt="event image" />
  <p>{{ description }}</p>
</template>

<style scoped>
h2 {
  margin-top: 2rem;
}
h3 {
  font-size: 1.25rem;
}
img {
  width: 50%;
  height: auto;
  margin-top: 1rem;
}
p {
  margin: 1rem 0;
}
</style>
