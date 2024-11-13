<script setup>
import Event from "../components/Event.vue";
import holidayImage from "../assets/events/holiday.jpg";
const events = [
  {
    title: "Holiday Bar Crawl",
    dateTime: "12/04/24 - 5:00 PM",
    description:
      "Hop around town with your neighbors and enjoy some holiday cheer!",
    image: holidayImage,
  },
  {
    title: "Event 2",
    dateTime: "1/26/25 - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Event 3",
    dateTime: "4/9/25 - 11:00 AM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
</script>

<template>
  <div class="content">
    <h1>Upcoming Events</h1>
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
