'use strict';

const path = require('path');

const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.styl', '.js', '.png', '.jpg', '.ico', '.gif'],
        alias: {
            'handlebars': './node_modules/handlebars/dist/handlebars.js',
            'assets': path.resolve(__dirname, 'public', 'assets'),
            'styles': path.resolve(__dirname, 'public', 'styles')
        }
    },
    entry: {
        main: path.resolve(__dirname, 'public', 'main.js')
    },
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    helperDirs: [__dirname + '/public/handlebars-helpers']
                }
            },
            {
                loader: 'babel-loader',
                test: /\.js$/
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract(['css-loader', {
                    loader: 'stylus-loader',
                    options: {

                    }
                }])
            },
            {
                test: /\.(png|gif|ico|jpe?g)/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build/*.*'], { root: path.resolve(__dirname, '..') }),
        new webpack.LoaderOptionsPlugin({
            stylus: {
                preferPathResolver: 'webpack'
            }
        }),
        new ExtractTextPlugin('./[name].css'),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.template.html'),
            filename: 'index.html',
            title: 'Konstantin Simeonov - Resume'
        })
    ]
};
