import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import('../views/profile/index.vue'),
    children: [
      {
      path: "/",
      name: "ProfilePost",
      component: () => import('../views/profile/post.vue'),
      },
      {
      path: "/igtv",
      name: "ProfileIGTVt",
      component: () => import('../views/profile/igtv.vue'),
      },
      {
      path: "/saved",
      name: "ProfileSaved",
      component: () => import('../views/profile/saved.vue'),
      },
      {
        path: "/tag",
        name: "ProfileTag",
        component: () => import('../views/profile/tag.vue'),
      },
  
  ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;