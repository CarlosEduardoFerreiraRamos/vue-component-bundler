// import Vue from "vue";
// import VueWebComponent from "./components/VueWebComponent";
// import { wrap } from "@vue/web-component-wrapper";

// import App from "./App.vue";
// import router from "./router";
// Vue.config.productionTip = false;

// *** DIFER *** //
import Vue from "vue";
// import wrap from "@vue/web-component-wrapper";
import VueCustomElement from "vue-custom-element";
import VueWebComponent from "./components/VueWebComponent";

// const CustomElement = wrap(Vue, VueWebComponent);
// window.customElements.define("my-custom-element", CustomElement);

Vue.use(VueCustomElement);
Vue.customElement("vue-web-component", VueWebComponent);
// *** DIFER *** //

// const CustomElement = wrap(Vue, VueWebComponent);

// window.customElements.define("vue-custom-element", CustomElement);

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");
