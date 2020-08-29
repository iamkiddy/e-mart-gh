import Vue from "vue";
import Router from "vue-router";
import navcarousel from "./components/pages/navcarousel";
import error404 from "./components/pages/error404";
import explore from "./components/home-links/explore";
import account from "./components/accounts/accounts";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: navcarousel,
    },
    {
      path: "*",
      component: error404,
    },
    {
      path: "/explore",
      component: explore,
    },
    {
      path: "/account",
      component: account,
    },
  ],
});
