const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/** @type {import('webpack').Configuration} */

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'public/assets'),
      '@icons': path.resolve(__dirname, 'public/assets/icons'),
      '@logos': path.resolve(__dirname, 'public/assets/logos'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                }
              ],
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }],
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: false,
    port: 8080,
    historyApiFallback: true
  },
  performance: {
    maxAssetSize: 488 * 1024,
    maxEntrypointSize: 488 * 1024
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
}