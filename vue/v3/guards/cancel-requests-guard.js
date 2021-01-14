import store from "../store";

export default (to, from, next) => {
  if (store.state.cancelTokenSource) {
    store.state.cancelTokenSource.cancel();
    store.commit("generateCancelToken");
  }
  next();
};
