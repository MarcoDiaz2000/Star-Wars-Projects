const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder');

module.exports = async () => {
  const port = await portfinder.getPortPromise({
    port: 8080, // El puerto mínimo que deseas buscar
    stopPort: 9000,
  });

  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: './dist',
      port,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(mp4)$/i, // <-- Añade esta regla
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
    },
  };
};
