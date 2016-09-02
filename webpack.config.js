// dependencies
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// variables
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;
var styles = 'css!sass';

// config
module.exports = {
    devServer: {
        contentBase: "./app"
    },
    devtool: 'source-map',
    entry: {
        common: ['./app/src/js/app.js', './app/src/css/style.scss']
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: DEBUG ? 'style!' + styles : ExtractTextPlugin.extract(styles)
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    output: {
        path: './app/dist/js/',
        filename: 'bundle.js',
        publicPath: '/dist/js/'
    },
    plugins: [
        new ExtractTextPlugin('./app/dist/css/style.css', {
            allChunks: true
        })
    ],
    watch: true
}