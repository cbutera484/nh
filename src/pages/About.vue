<script setup>
import pool from "../assets/pool.jpeg";
</script>
<template>
  <div class="content">
    <h1>Welcome to the Huntington Village Cooperative Apartments</h1>
    <p>
      Nestled in the heart of historic Huntington and established in 1950,
      Huntington Village Cooperative Apartments offer an inviting blend of
      comfort, convenience, and charm. Located within walking distance of
      Huntington’s vibrant downtown, our community places you just steps away
      from some of the finest dining, shopping, and nightlife Long Island has to
      offer. Savor a meal at a top-tier restaurant, unwind at a local bar, or
      catch a live show at The Paramount theater—all without ever needing to get
      in the car.
    </p>
    <img :src="pool" alt="pool" />
    <p>
      For those looking for a sense of community, our cooperative frequently
      hosts social gatherings, including poolside get-togethers and seasonal
      events, allowing residents to connect and enjoy our shared spaces.
    </p>
    <p>
      The beautifully maintained grounds feature lush landscaping, providing a
      tranquil setting that feels like a private oasis. Our professional
      maintenance team handles landscaping, snow shoveling, and all essential
      upkeep, allowing you to enjoy worry-free living in every season. From
      vibrant flower beds in the spring to prompt snow removal in the winter,
      our staff ensures that the property is always welcoming and
      well-maintained for your enjoyment and peace of mind.
    </p>
    <p>
      For a change of scenery, the Long Island Rail Road is just minutes away,
      allowing for a quick commute or an exciting night out in New York City.
    </p>

    <h2>Amenities include:</h2>
    <ul>
      <li>Spaceous 2 and 1 bedroom units</li>
      <li>Private Inground pool</li>
      <li>Available garage parking</li>
      <li>Private parking lots and ample street parking</li>
      <li>On-site Laundry Facilities</li>
      <li>Playground(?)</li>
    </ul>

    <p></p>
  </div>
</template>

<style scoped>
ul {
  list-style-type: disc;
  margin-left: 2rem;
}
img {
  width: 50%;
  height: 400px;
  float: right;
  padding: 1rem;
}
</style>
