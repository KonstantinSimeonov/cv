'use strict';

const path = require('path');

const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.styl', '.js', '.png', '.jpg', '.ico', '.gif'],
        alias: {
            'handlebars': path.resolve('node_modules', 'handlebars', 'dist', 'handlebars.js'),
            'assets': path.resolve(__dirname, 'src', 'public', 'assets'),
            'styles': path.resolve(__dirname, 'src', 'public', 'styles')
        }
    },
    entry: {
        app: path.resolve(__dirname, 'src', 'public', 'app.js')
    },
    output: {
        path: path.resolve(__dirname, 'build', 'public'),
        filename: '[name].[hash].js',
        publicPath: '/public/'
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    helperDirs: [__dirname + '/src/public/handlebars-helpers']
                }
            },
            {
                loader: 'babel-loader',
                test: /\.js$/
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
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
        new CleanWebpackPlugin(['build/public/*.*'], { root: __dirname }),
        new webpack.LoaderOptionsPlugin({
            stylus: {
                preferPathResolver: 'webpack'
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'public', 'index.template.html'),
            filename: 'index.html',
            title: 'Konstantin Simeonov - Resume'
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'src', 'public', 'static'), to: path.resolve(__dirname, 'build', 'public', 'static') },
            { from: path.resolve(__dirname, 'src', 'public', 'assets'), to: path.resolve(__dirname, 'build', 'public', 'assets') },
            { from: path.resolve(__dirname, 'Procfile'), to: path.resolve(__dirname, 'build') },
            { from: path.resolve(__dirname, 'src', 'package.json'), to: path.resolve(__dirname, 'build') },
            { from: path.resolve(__dirname, 'src', 'server.js'), to: path.resolve(__dirname, 'build') }
        ])
    ]
};
