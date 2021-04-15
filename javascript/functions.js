const isStandalone = () => {
  return window.matchMedia("(display-mode: standalone)").matches;
};
const isiOS = () => {
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
};
const isMac = () => {
  return /macintosh/.test(window.navigator.userAgent.toLowerCase());
}
