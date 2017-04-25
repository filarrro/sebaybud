var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle: __dirname + '/public/js/entry.js',
        login: __dirname + '/public/js/entry-login.js'
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
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg)$/,
            loader: 'url-loader?limit=8192&name=../img/[name].[ext]'
        }]
    },
    externals: {
        "angular": "angular",
        "TweenMax": "TweenMax",
        "ScrollMagic": "ScrollMagic",
    }

}