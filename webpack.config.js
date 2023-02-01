const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            inject: 'body',
        }),
    ],
    devServer: {
        port: process.env.PORT || 3000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
};