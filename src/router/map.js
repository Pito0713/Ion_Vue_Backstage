const routes = [
  {
    path: "/",
    component: () => import("../pages/homePage/homePage.vue"),
    name: "/",
    meta: { requiresAuth: false },
  },
  {
    path: "/homePage",
    component: () => import("../pages/homePage/homePage.vue"),
    name: "homePage",
    meta: { requiresAuth: false },
  },
];

export { routes };
