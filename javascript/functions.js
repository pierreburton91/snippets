const isStandalone = () => {
  return window.matchMedia("(display-mode: standalone)").matches;
};
const isiOS = () => {
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
};