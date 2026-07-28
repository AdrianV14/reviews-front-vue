import { createRouter, createWebHistory } from "vue-router";
import { homeRoutes } from "./home/routes/home.routes";

export const routes = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeRoutes
  ],
});
