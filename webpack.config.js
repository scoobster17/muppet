// dependencies
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// config
module.exports = {
    devServer: {
        contentBase: "./app"
    },
    devtool: 'source-map',
    entry: {
        main: './app/src/js/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
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