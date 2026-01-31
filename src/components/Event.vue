<script setup>
defineProps({
  title: String,
  dateTime: String,
  image: String,
  description: String,
});
</script>
<template>
  <h3>{{ title }}</h3>
  <h4>{{ dateTime }}</h4>
  <p>{{ description }}</p>

  <img v-if="image" :src="image" alt="event image" />
</template>

<style scoped>
h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}
h4 {
  font-size: 1.25rem;
}
img {
  width: 50%;
  height: auto;
  margin-top: 1rem;
}
p {
  margin: 1rem 0;
  font-size: 1.25rem;
}
</style>
