const path = require('path');
const webpack = require('webpack');

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, 'bundles'),
};

const config = {
  // These are the entry point of our library. We tell webpack to use
  // the name we assign later, when creating the bundle. We also use
  // the name to filter the second entry point for applying code
  // minification via UglifyJS
  entry: {
    'stomp-logger': [PATHS.entryPoint],
  },
  // The output defines how and where we want the bundles. The special
  // value `[name]` in `filename` tell Webpack to use the name we defined above.
  // We target a UMD and name it MyLib. When including the bundle in the browser
  // it will be accessible at `window.MyLib`
  output: {
    path: PATHS.bundles,
    filename: '[name].umd.js',
    libraryTarget: 'umd',
    library: 'StompLogger',
    globalObject: `typeof self !== 'undefined' ? self : this`,
    umdNamedDefine: true,
  },
  mode: 'development',
  // Add resolve for `tsx` and `ts` files, otherwise Webpack would
  // only look for common JavaScript file extension (.js)
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: [
    {
      '@stomp/stompjs': {
        commonjs: '@stomp/stompjs',
        commonjs2: '@stomp/stompjs',
        amd: '@stomp/stompjs',
        root: 'StompJs',
      },
    },
    {
      '@stomp/rx-stomp': {
        commonjs: '@stomp/rx-stomp',
        commonjs2: '@stomp/rx-stomp',
        amd: '@stomp/rx-stomp',
        root: 'RxStomp',
      },
    },
  ],
  // Activate source maps for the bundles in order to preserve the original
  // source when the user debugs the application
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: false,
        },
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};

module.exports = config;
