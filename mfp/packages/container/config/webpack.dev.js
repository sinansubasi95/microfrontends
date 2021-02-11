const { merge } = require('webpack-merge'); // merge is a function that we can use to merge together two different web config objects.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // It takes some kind of HTML file inside of project and inject couple of different script tags inside of it.
const commonConfig = require('./webpack.common');
// const { module } = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);