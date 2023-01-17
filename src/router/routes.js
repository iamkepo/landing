

export default [
  {
    path: "/",
    name: "HomeLayout",
    component: import("@/layouts/HomeLayout"),
    children: [{
      path: "",
      name: "Home",
      component:  import("@/views/index"),
    }],
  },
  {
    path: "/page",
    name: "PageLayout",
    component: import("@/layouts/PageLayout"),
    children: [{
      path: "",
      name: "Page",
      component:  import("@/views/page/index"),
    }],
  },
  { path: "/:pathMatch(.*)*", redirect: "/auth" },
];
