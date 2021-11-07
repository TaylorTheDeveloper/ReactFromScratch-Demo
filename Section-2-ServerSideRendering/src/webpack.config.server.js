const path = require('path');
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: './server/server.js',
    output: {
        filename: 'server-bundle.js',
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
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: false,
    }    
}