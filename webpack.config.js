var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        bundle: __dirname + '/public/js/entry.js',
        login: __dirname + '/public/js/entry-login.js',
        admin: __dirname + '/public/js/entry-admin.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/dist'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg)$/,
            loader: 'url-loader?limit=8192&name=../img/[name].[ext]'
        }]
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true
            }
        })
    ],
    externals: {
        "angular": "angular",
        "TweenMax": "TweenMax",
        "ScrollMagic": "ScrollMagic",
    }
}