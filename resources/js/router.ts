import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: import("./Pages/HomePage.vue"),
    },
    {
      path: "/product/new",
      name: "product.new",
      component: import("./Pages/CreateProductPage.vue"),
    },
  ],
});

export default router;
