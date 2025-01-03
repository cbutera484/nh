<script setup>
import Event from "../components/Event.vue";
import holidayImage from "../assets/events/holiday.jpg";
const events = [
  {
    title: "Holiday Dinner",
    dateTime: "12/20/24 - 6:00 PM",
    description:
      "Have dinner with your neighbors and enjoy some holiday cheer!",
    image: holidayImage,
  },
];
</script>

<template>
  <div class="content">
    <h1>Come as a Stranger, Leave as a Friend</h1>
    <p>
      For those looking for a sense of community, our cooperative frequently
      hosts social gatherings, including poolside get-togethers and seasonal
      events, allowing residents to connect and enjoy our shared spaces and
      vibrant town.
    </p>
    <div v-for="event in events" :key="event.title">
      <Event
        :title="event.title"
        :dateTime="event.dateTime"
        :description="event.description"
        :image="event.image"
      />
    </div>
  </div>
</template>
