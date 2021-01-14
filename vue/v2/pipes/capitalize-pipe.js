import Vue from "vue";

export default Vue.filter("capitalize", value =>
  !value ? "" : `${value.charAt(0).toUpperCase()}${value.slice(1)}`
);
