const routes = [
  {
    path: "/",
    component: () => import("../pages/homePage/index.vue"),
    name: "/",
    meta: { requiresAuth: false },
  },
  {
    path: "/homePage",
    component: () => import("../pages/homePage/index.vue"),
    name: "homePage",
    meta: { requiresAuth: false },
  },
  {
    path: "/memberPage",
    component: () => import("../pages/memberPage/index.vue"),
    name: "memberPage",
    meta: { requiresAuth: false },
  },
  {
    path: "/settingPage",
    component: () => import("../pages/settingPage/index.vue"),
    name: "settingPage",
    meta: { requiresAuth: false },
  },
];

export { routes };
