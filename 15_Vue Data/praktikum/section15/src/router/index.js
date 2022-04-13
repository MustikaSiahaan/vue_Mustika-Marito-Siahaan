import Vue from "vue";
import VueRouter from "vue-router";

import BeritaLayout from "@/layout/BeritaLayout.vue";


import BeritaView from "@/views/BeritaView.vue";
import DetailBeritaView from "@/views/DetailBeritaView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/berita",
    component: BeritaLayout,
    meta: {
      auth: true,
    },
    children: [
      {
        path: "",
        name: "Berita",
        component: BeritaView,
      },
      {
        path: ":title",
        name: "DetailBeritaView",
        component: DetailBeritaView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  // ambil data dari local storage
  const storeString = localStorage.getItem("vuex") || "{}";
  // parse dari string ke json object
  const store = JSON.parse(storeString);
  if (to.matched.some((record) => record.meta.auth)) {
    if (store && store.auth.username === "") {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
