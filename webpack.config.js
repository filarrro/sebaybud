var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: __dirname + '/public/js/entry.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js'
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
    resolve: {
        alias: {
            'ScrollMagicGSAP': path.join(__dirname, '/node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
            'gsapScrollToPlugin': path.join(__dirname, '/node_modules/gsap/src/minified/plugins/ScrollToPlugin.min.js'),
            'normalize-css': path.join(__dirname, '/node_modules/angular-material/angular-material.min.css'),
            'material-css': path.join(__dirname, '/node_modules/normalize.css/normalize.css'),
        }
    }
}