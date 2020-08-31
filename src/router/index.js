import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import System from "../views/System.vue";
import Kiosk from "../views/Kiosk.vue";
import Smart from "../views/Smart.vue";
import Review from "../views/Review.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component:About,
  },
  {
    path:'/product/system',
    name:'system',
    component:System,
  },
  {
    path:'/product/kiosk',
    name:'kiosk',
    component:Kiosk,
  },
  {
    path:'/product/smart',
    name:'smart',
    component:Smart,
  },
  {
    path:'/review',
    name:'review',
    component:Review,
  },
];

const router = new VueRouter({
  
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  
});

export default router;
