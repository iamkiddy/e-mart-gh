import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import vueTopprogress from "vue-top-progress";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(Vuesax);
Vue.use(vueTopprogress);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
