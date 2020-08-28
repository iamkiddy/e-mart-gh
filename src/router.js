import Vue from "vue";
import Router from "vue-router";
import freeshippingnavbar from "./components/pages/freeshippingnavbar";
import navcarousel from "./components/pages/navcarousel";
import error404 from "./components/pages/error404";
import explore from "./components/home-links/explore";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "home",
      path: "/",
      component: navcarousel,
    },
    {
      name: "freeShippingNavbar",
      path: "/",
      component: freeshippingnavbar,
    },
    {
      name: "explore",
      path: "/explore",
      component: explore,
    },
  ],
});
