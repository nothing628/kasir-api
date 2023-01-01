import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./Pages/HomePage.vue"),
    },
    {
      path: "/product/new",
      name: "product.new",
      component: () => import("./Pages/CreateProductPage.vue"),
    },
    {
      path: "/product/:id",
      name: "product.edit",
      props: true,
      component: () => import("./Pages/UpdateProductPage.vue"),
    }
  ],
});

export default router;
