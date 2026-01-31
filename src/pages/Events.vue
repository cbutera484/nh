<script setup>
import Event from "../components/Event.vue";
import poolImage from "../assets/events/pool.jpg";
import courtyardImage from "../assets/events/courtyard-fall.jpg";
import supermanImage from "../assets/events/superman.jpg";
const pastEvents = [
  {
    title: "Nathan Hale Movie Night by the Pool",
    dateTime: "Septenber, 19, 2025",
    description: "Superman (2025)",
    image: supermanImage,
  },
  {
    title: "Poolside Get Together",
    dateTime: "August 8, 2025",
    description:
      "Live music, pizza, and fun in the sun!  Water will be provided, drinks are allowed but no glass please.",
    image: poolImage,
  },
];
const upcomingEvents = [
  {
    description:
      "Stay warm and check back soon for upcoming events in the Spring!",
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
    <h2>Upcoming Events</h2>
    <div class="events" v-for="event in upcomingEvents" :key="event.title">
      <Event
        :title="event.title"
        :description="event.description"
        :dateTime="event.dateTime"
        :image="event.image"
      />
    </div>
    <h2>Local Events</h2>
    <p>
      For events and activities around the Huntington area, check out
      <a href="https://www.instagram.com/howabouthuntington/?hl=en"
        >@HowAboutHuntington</a
      >
      on Instagram
    </p>
    <h2>Past Events</h2>
    <div class="events" v-for="event in pastEvents" :key="event.title">
      <Event
        :title="event.title"
        :description="event.description"
        :dateTime="event.dateTime"
        :image="event.image"
      />
    </div>
  </div>
</template>

<style scoped>
.events {
  margin-bottom: 2rem;
}

a {
  text-decoration: underline;
}

h2 {
  font-size: 2rem;
  margin-top: 3rem;
}
p {
  font-size: 1.25rem;
}
</style>
