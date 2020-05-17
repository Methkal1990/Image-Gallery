import Vue from "vue";
import Vuex from "vuex";
import images from "./modules/images";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    images,
  },
});
