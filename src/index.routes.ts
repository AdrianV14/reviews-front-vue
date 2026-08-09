import { createRouter, createWebHistory } from "vue-router";
import { homeRoutes } from "./home/routes/home.routes";
import { authRoutes } from "./auth/routes/auth.routes";
import { adminRoutes } from "./admin/routes/admin.routes";

export const routes = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeRoutes,
    ...authRoutes,
    ...adminRoutes,
  ],
});
