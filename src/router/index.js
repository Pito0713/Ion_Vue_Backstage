import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./map";
import Cookies from "js-cookie";

// 建立
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
