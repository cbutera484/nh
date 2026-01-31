import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import PhotoGallery from "./pages/PhotoGallery.vue";
import Events from "./pages/Events.vue";
import Info from "./pages/Info.vue";
import Contact from "./pages/Contact.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: { bodyClass: "home" },
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/photo-gallery",
      component: PhotoGallery,
    },
    {
      path: "/events",
      component: Events,
    },
    {
      path: "/info",
      component: Info,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});
