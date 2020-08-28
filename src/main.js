import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import vueTopprogress from "vue-top-progress";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import router from "./router";

Vue.use(Vuesax);
Vue.use(vueTopprogress);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
