<script setup>
import Gallery from "../components/Gallery.vue";

import image1 from "../assets/gallery1.jpeg";
import image1thumbnail from "../assets/gallery1_thumbnail.jpg";
import image2 from "../assets/gallery2.jpeg";
import image2thumbnail from "../assets/gallery2_thumbnail.jpg";
import image3 from "../assets/gallery3.jpeg";
import image3thumbnail from "../assets/gallery3_thumbnail.jpg";
import image4 from "../assets/gallery4.jpeg";
import image4thumbnail from "../assets/gallery4_thumbnail.jpg";
import image5 from "../assets/gallery5.jpeg";
import image5thumbnail from "../assets/gallery5_thumbnail.jpg";
import image6 from "../assets/gallery6.jpeg";
import image6thumbnail from "../assets/gallery6_thumbnail.jpg";
import image7 from "../assets/gallery7.jpg";
import image7thumbnail from "../assets/gallery7_thumbnail.jpg";
import image8 from "../assets/gallery8.jpg";
import image8thumbnail from "../assets/gallery8_thumbnail.jpg";
import image9 from "../assets/gallery9.jpeg";
import image9thumbnail from "../assets/gallery9_thumbnail.jpg";
import image10 from "../assets/gallery10.jpeg";
import image10thumbnail from "../assets/gallery10_thumbnail.jpg";
import image11 from "../assets/gallery11.jpeg";
import image11thumbnail from "../assets/gallery11_thumbnail.jpg";
import image12 from "../assets/gallery12.jpeg";
import image12thumbnail from "../assets/gallery12_thumbnail.jpg";
import image13 from "../assets/gallery13.jpeg";
import image13thumbnail from "../assets/gallery13_thumbnail.jpg";
import image14 from "../assets/gallery14.jpeg";
import image14thumbnail from "../assets/gallery14_thumbnail.jpg";
import image15 from "../assets/gallery15.jpeg";
import image15thumbnail from "../assets/gallery15_thumbnail.jpg";

const images = [
  {
    largeURL: image2,
    thumbnailURL: image2thumbnail,
    width: 5712,
    height: 4284,
  },
  {
    largeURL: image3,
    thumbnailURL: image3thumbnail,
    width: 5712,
    height: 4284,
  },
  {
    largeURL: image4,
    thumbnailURL: image4thumbnail,
    width: 3024,
    height: 4023,
  },
  {
    largeURL: image5,
    thumbnailURL: image5thumbnail,
    width: 5712,
    height: 4284,
  },
  {
    largeURL: image6,
    thumbnailURL: image6thumbnail,
    width: 4032,
    height: 3024,
  },
  {
    largeURL: image1,
    thumbnailURL: image1thumbnail,
    width: 4032,
    height: 3024,
  },
  {
    largeURL: image7,
    thumbnailURL: image7thumbnail,
    width: 4048,
    height: 3036,
  },
  {
    largeURL: image8,
    thumbnailURL: image8thumbnail,
    width: 4032,
    height: 3024,
  },
  {
    largeURL: image9,
    thumbnailURL: image9thumbnail,
    width: 1080,
    height: 696,
  },
  {
    largeURL: image10,
    thumbnailURL: image10thumbnail,
    width: 810,
    height: 1080,
  },
  {
    largeURL: image11,
    thumbnailURL: image11thumbnail,
    width: 1080,
    height: 1282,
  },
  {
    largeURL: image12,
    thumbnailURL: image12thumbnail,
    width: 810,
    height: 1080,
  },
  {
    largeURL: image13,
    thumbnailURL: image13thumbnail,
    width: 810,
    height: 1080,
  },
  {
    largeURL: image14,
    thumbnailURL: image14thumbnail,
    width: 4284,
    height: 5712,
  },
  {
    largeURL: image15,
    thumbnailURL: image15thumbnail,
    width: 3024,
    height: 4032,
  },
];
</script>

<template>
  <div class="content">
    <h1>Photo Gallery</h1>

    <Gallery
      galleryID="gallery"
      class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4"
      :images="images"
    />
  </div>
</template>
