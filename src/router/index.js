import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./map";
import Cookies from "js-cookie";

// 建立
const router = createRouter({
  history: createWebHashHistory("/ion_vue_frontstage_web"),
  routes,
});

export default router;
