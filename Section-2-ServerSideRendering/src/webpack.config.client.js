const path = require('path');
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    entry: './src/client/App.js',
    output: {
        filename: 'client-bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
             loader: 'babel-loader',
             test: /\.js$/,
             exclude: /node_modules/   
            }
        ]
    },
    devServer:{
        static: path.join(__dirname, '/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(appDirectory, "./src/client/public/index.html"),
        }),
    ],
}