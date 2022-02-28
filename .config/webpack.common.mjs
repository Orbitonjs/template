import { resolve, dirname, relative } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";
import { getPages } from './utils.mjs'


const entry = {}
const pages = getPages('./src/pages')
const HTMLPages = []
pages.map((page) => {
  const pageNameWithExt = relative("./src/pages", page)
  const pageName = pageNameWithExt.slice(0, pageNameWithExt.length - 3)
  HTMLPages.push(pageName)
  entry[pageName] = `./${page}`;
})


export const config = {
  entry,
  output: {
    filename: '[name].js',
    path: resolve(dirname('.'), 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                auto: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
                namedExport: true,
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "" },
      ],
    }),
  ].concat(
    HTMLPages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/template.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    ),
  ),
}
