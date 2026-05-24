import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from "../components/projects/Projects.vue";
import AboutMe from "../components/about-me/AboutMe.vue";
import Resume from "../components/resume/Resume.vue";
import Contact from "../components/contact/Contact.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/about-me",
      name: "AboutMe",
      component: AboutMe,
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;
