const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const isProd = modeEnv === 'production';
  const config = webpackConfig(modeEnv);

  const optimizations = {
    splitChunks: {
    // Чанки для нашего приложения. Все наши npm-пакеты вынесем в отдельный файл с определенным хешем, чтобы клиент каждый раз при изменениях не выкачивал все по-новой
      cacheGroups: {
        vendors: {
          name: 'vendors',
          // test: /node_modules/,
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  if (isProd) {
    optimizations.minimize = true;
    optimizations.minimizer.push(new TerserWebpackPlugin());
  }

  return {
    devServer: {
      compress: true,
      port: 4200,
      client: {
        progress: true,
      },
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      open: true,
      historyApiFallback: true,
      // Cо значением false WDS будет «прямолинейно» обрабатывать ссылки для React Router'а. Т.е. он будет по путь->директория искать index.html, а он у нас один и в корне.
    },
    resolve: config.resolve,
    module: {
      rules: [
        config.modules.js,
        config.modules.stylus,
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/Html/Browser.html', // Скармливаем наш HTML-темплейт
      }),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
    ],
    entry: {
      main: './src/Client.tsx', // Энтрипоинт-файл, с которого и начнется наша сборка
    },
    output: {
      filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
      // небольшое условие, т.к. WDS не будет работать с chunkhash
      path: path.resolve(__dirname, 'dist'),
      // Весь наш результат складываем в папку dist
      publicPath: '/',
      clean: true,
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
  };
};
