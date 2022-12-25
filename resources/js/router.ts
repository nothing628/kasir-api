import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: import("./Pages/HomePage.vue"),
    },
  ],
});

export default router;
