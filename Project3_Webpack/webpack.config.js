const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // entry point ( source )
    entry: {
        server:  path.join(__dirname, 'server/index.js'),
        main: path.join(__dirname, 'source/main.js'),
        api: path.join(__dirname, 'source/api.js')
    },
    
    target:'node',

    // output
    output: {
        filename: '[name].[contenthash].js'
    },
 

    // plugins
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'source/index.html')
        })
    ],

    // module
    module: {
        rules: [
            {
                test: /\.css/i,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }



}