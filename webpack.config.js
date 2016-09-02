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
    output: {
        filename: './app/dist/js/bundle.js'
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
    plugins: [
        new ExtractTextPlugin('./app/dist/css/style.css', {
            allChunks: true
        })
    ]
}