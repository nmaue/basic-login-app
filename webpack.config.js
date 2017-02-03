var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    context: path.join(__dirname, "app"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: [
        'babel-polyfill',
        "./index.js"
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
        ]
    },
    output: {
        path: __dirname + "/prod/",
        filename: "bundle.js"
    },
    plugins: debug ? [HTMLWebpackPluginConfig] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
            HTMLWebpackPluginConfig
        ],
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }
};