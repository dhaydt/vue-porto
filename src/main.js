import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Flicking from "@egjs/vue-flicking";
import Carousel3d from "vue-carousel-3d";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import Vue from "vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "@egjs/vue-flicking/dist/flicking.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@egjs/vue-flicking/dist/flicking-inline.css";

Vue.use(Flicking);
Vue.use(Carousel3d);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
