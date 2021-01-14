import Vue from "vue";

export default (to, from, next) => {
  if (Vue.prototype?.$services?.source) {
    Vue.prototype.$services.source.cancel();
    Vue.prototype.$services.generateToken();
  }
  next();
};
