var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var root = path.resolve(__dirname, 'app');

module.exports = {
    context: path.join(__dirname, 'app'),

    entry: {
        sales_generator_lp: path.resolve(root, 'sales.generator.lp.jsx'),
        style: path.resolve(root, 'assets/sass/style.scss'),
        slick: path.resolve(root, 'assets/common/slick.min.css'),
        slicktheme: path.resolve(root, 'assets/common/slick-theme.min.css')
    },
    output:{
        path: __dirname + '/build',
        filename: '[name].js'
    },
    watch: true,

    module: {
        loaders: [
            {
             test: /\.jsx?$/,
             exclude: /(node_modules)/,
             loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader' })
            },
            {
                test: /\.(svg)|(png)|(jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(css)$/,
                loader: 'file-loader?name=common/[name].[ext]'
            }
        ]
    },
    //devtool: "eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
           template: path.resolve(root, './index.html')
        }),
        new ExtractTextPlugin({ filename: './[name].css', disable: false, allChunks: true }),
        new CopyWebpackPlugin([
            { from: 'assets/images', to: './images/' },
            { from: 'assets/common', to: './common'}
        ])
   ]
};
