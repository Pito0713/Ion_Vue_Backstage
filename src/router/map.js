const routes = [
  {
    path: "/",
    component: () => import("../pages/loginPage/index.vue"),
    name: "/",
    meta: { requiresAuth: false },
  },
  {
    path: "/loginPage",
    component: () => import("../pages/loginPage/index.vue"),
    name: "loginPage",
    meta: { requiresAuth: false },
  },
  {
    path: "/homePage",
    component: () => import("../pages/homePage/index.vue"),
    name: "homePage",
    meta: { requiresAuth: false },
  },
  {
    path: "/activePage",
    component: () => import("../pages/activePage/index.vue"),
    name: "activePage",
    meta: { requiresAuth: false },
  },
  {
    path: "/recordPage",
    component: () => import("../pages/recordPage/index.vue"),
    name: "recordPage",
    meta: { requiresAuth: false },
  },
];

export { routes };
