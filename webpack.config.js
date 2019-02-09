/**
 * 
 * this is the configuration file for webpack module bundler
 * previouse de facto was using gulp and grant as task runners 
 * 
 * Here webpack does not have any relationship with React directly
 * 
 */

const path = require('path')

//creates index.html and inject the required src js references at build time
//Ex : <script type="text/javascript" src="index_bundle.js"></script>
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './src/index.js', //webpack starts bundling from here and place the output on output dir
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' //babel-loader is used at the time of pre process of bundling js
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader' //css-loade is used at the time of pre process for css
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}