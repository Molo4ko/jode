const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('./webpack.config');

module.exports = (env, argv) => {
  const modeEnv = argv.mode || 'development';
  const config = webpackConfig(modeEnv);

  const optimizations = {
    minimizer: [
      new TerserWebpackPlugin(),
    ],
    minimize: true,
  };

  return {
    plugins: [
      new MiniCssExtractPlugin(), // Подключаем плагин для CSS
    ],
    resolve: config.resolve,
    module: {
      rules: [
        config.modules.js,
        config.modules.stylusIsomorph,
      ],
    },
    entry: {
      main: './src/Server.tsx', // Тут уже энтрипоинт сервера
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'server'), // Все компилируем в папку server
      clean: true,
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
    target: 'node', // обязательно указываем режим сборки для node js, а не браузера
    externals: [nodeExternals()], // исключаем node_modules
  };
};
