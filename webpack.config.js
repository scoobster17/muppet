// dependencies
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// config
/*odule.exports = {
    devServer: {
        contentBase: "./app"
    },
    devtool: 'source-map',
    entry: {
        main: './app/src/js/main.js'
    },
    output: {
        filename: './app/dist/js/[name].js'
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
        new ExtractTextPlugin('./app/dist/css/main.css', {
            allChunks: true
        })
    ]
}*/

module.exports = {
    context: __dirname + "/app",
    devServer: {
        contentBase: "./app"
    },
    entry: "src/js/main.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        filename: "bundle.js"
    }
}