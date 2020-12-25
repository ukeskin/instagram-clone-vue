import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component:() => import(/* webpackChunkName: "profile" */'../views/profile')
  },
  {
    path: "/direct",
    name: "Direct",
    component:() => import(/* webpackChunkName: "profile" */'../views/direct')
  },
  {
    path: "/explore",
    name: "Explore",
    component:() => import(/* webpackChunkName: "profile" */'../views/explore')
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
      path: "igtv",
      name: "ProfileIGTV",
      component: () => import('../views/profile/igtv.vue'),
      },
      {
      path: "saved",
      name: "ProfileSaved",
      component: () => import('../views/profile/saved.vue'),
      },
      {
        path: "tag",
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