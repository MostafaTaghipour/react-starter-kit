"use strict";

module.exports = {
  plugins: ["scss"],
  modifyOptions({
    webpackObject, // the imported webpack node module
    options: {
      pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
      razzleOptions, // the default options/ options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
    },
  }) {
    const options = Object.assign({}, razzleOptions);
    const isSPA = process.argv.includes("--spa");
    if (isSPA) options.buildType = "spa";

    // options.staticCssInDev = true;
    return options;
  },
  modifyPaths({
    webpackObject, // the imported webpack node module
    options: {
      pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
      razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
    },
    paths, // the default paths that will be used by Razzle.
  }) {
    // Do some stuff...
    return paths;
  },
  modifyWebpackOptions({
    env: {
      target, // the target 'node' or 'web'
      dev, // is this a development build? true or false
    },
    webpackObject, // the imported webpack node module
    options: {
      pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
      razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
      webpackOptions, // the default options that will be used to configure webpack/ webpack loaders and plugins
    },
    paths, // the modified paths that will be used by Razzle.
  }) {
    if (target === "web") {
      // client only
    }
    if (target === "node") {
      // server only
    }
    if (dev) {
      // dev only
    } else {
      // prod only
    }
    // Do some stuff...

    // client only
    return webpackOptions;
  },
  modifyWebpackConfig({
    env: {
      target, // the target 'node' or 'web'
      dev, // is this a development build? true or false
    },
    webpackConfig, // the created webpack config
    webpackObject, // the imported webpack node module
    options: {
      pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
      razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
      webpackOptions, // the modified options that was used to configure webpack/ webpack loaders and plugins
    },
    paths, // the modified paths that will be used by Razzle.
  }) {
    const config = Object.assign({}, webpackConfig);

    if (target === "web") {
      // client only
      // config.devServer = Object.assign(config.devServer, {
      //   open: "chrome",
      // });
    }
    if (target === "node") {
      // server only
    }
    if (dev) {
      // dev only
    } else {
      // prod only
    }

    // config.module.rules.push({
    //   test: /\.css$/,
    //   include: path.join(__dirname, "src"),
    //   use: [
    //     "style-loader",
    //     {
    //       loader: "typings-for-css-modules-loader",
    //       options: {
    //         modules: true,
    //         namedExport: true,
    //       },
    //     },
    //   ],
    // });

    // Do some stuff...
    return config;
  },
  modifyJestConfig({
    jestConfig, // the created jest config
    webpackObject, // the imported webpack node module
    options: {
      pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
      razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
    },
    paths, // the modified paths that will be used by Razzle.
  }) {
    // Do some stuff...
    return jestConfig;
  },
};
