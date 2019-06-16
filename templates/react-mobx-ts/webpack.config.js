const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HappyPack = require('happypack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// base config
const config = {
  mode: process.env.NODE_ENV,
  entry: {
    vendor: ['@babel/polyfill'],
    main: ['./index.tsx']
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    alias: {
      style: path.resolve(__dirname, 'src', 'style'),
      'react-hot-loader': path.resolve(path.join(__dirname, './node_modules/react-hot-loader/'))
    }
    // plugins: [new TsConfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
              ],
              '@babel/preset-typescript',
              '@babel/preset-react'
            ],
            plugins: [
              // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              'react-hot-loader/babel'
            ]
          }
        }
        // use: ['react-hot-loader', 'awesome-typescript-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['happypack/loader']
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true
  },
  externals: {
    // react: 'React',
    // 'react-dom': 'ReactDOM'
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      template: path.resolve(__dirname, 'index.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new HappyPack({
      loaders: ['source-map-loader']
    })
  ]
};

// development config
if (process.env.NODE_ENV === 'development') {
  config.output.filename = 'js/[name].[hash:8].js';
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.optimization = {
    minimize: false
  };
}

// production config
if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map';
  [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new MiniCssExtractPlugin({
      debug: false,
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin({})
  ].forEach(plugin => config.plugins.push(plugin));
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ],
    splitChunks: {
      chunks: 'all'
    }
  };
  config.performance = {
    hints: false
  };
}

// debug
if (process.env.WEBPACK_DEBUG) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
