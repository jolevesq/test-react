const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const package = require('./package.json');
const childProcess = require('child_process');

// get version numbers and the hash of the current commit
const [major, minor, patch] = package.version.split('.');
const hash = JSON.stringify(childProcess.execSync('git rev-parse HEAD').toString().trim());
console.log('Build CGP Viewer: ' + major + '.' + minor + '.' + patch);

const config = {
    entry: path.resolve(__dirname, 'src/main.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gcpv-main.js',
    },
    resolve: {
        extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx|js|jsx)$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
            },
            {
                test: /\.s?[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name:'img/[name]_[hash:7].[ext]',
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Canadian Geospatial Platform Viewer',
        }),
        new webpack.DefinePlugin({
            __VERSION__: {
                major,
                minor,
                patch,
                timestamp: Date.now(),
                hash,
            }
        })
    ]
};

module.exports = config;
