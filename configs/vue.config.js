const path = require("path");

module.exports = {
  // easy sass imports
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, `src/styles`)]
        }
      }
    }
  },
  // pwa config
  pwa: {
    name: "appName",
    themeColor: `#ffffff`,
    msTileColor: "#fafafa",
    appleMobileWebAppCapable: "yes",
    iconPaths: {
      favicon32: "img/icons/icon-32.png",
      favicon16: "img/icons/icon-16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/msapplication-icon-144x144.png"
    },
    workboxOptions: {
      skipWaiting: true,
      cacheId: Date.now().toString()
    }
  },
  // prevent images from being inserted as base64
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        options.limit = -1;
        return options;
      });
  }
};
