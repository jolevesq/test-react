const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

const pluginName = 'cgpv';

module.exports = function(variable={}, argv) {
    console.log('WEBPACK -- STARTED');
    const config = {
        mode: argv.mode,
        devtool: argv.mode === 'development' ? 'source-map' : false,

        entry: ['./src/index.tsx'],

        output: {
            path: '/dist/',
            filename: 'cgpv-main.js'
        },

        resolve: {
            extensions: ['.ts', '.js', '.css', '.scss']
        },

        module: {
            rules: [
                // {
                //     test: /\.s?[ac]ss$/,
                //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                // },
                {
                    test: /\.s?[ac]ss$/,
                    use: ['css-loader', 'sass-loader']
                },
                {
                    test: /\.tsx$/,
                    use: 'babel-loader',
                    include: [__dirname],
                    exclude: /node_modules/
                },
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    include: [__dirname],
                    exclude: /node_modules/
                },
                // {
                //     test: /\.(png|svg)$/,
                //     use: 'url-loader'
                // }
            ]
        },

        plugins: [
            // new MiniCssExtractPlugin({
            //     filename:  `./${pluginName}.css`
            // }),

            // new CopyWebpackPlugin({ patterns: [
            //     {
            //         from: 'src/samples/*.+(html|json)',
            //         to: 'samples/[name].[ext]',
            //         toType: 'template',
            //     },
            //     {
            //         from: '../fgpv/*.+(js|css)',
            //         to: '../fgpv'
            //     }
            // ]})

            new HtmlWebpackPlugin({
                title: 'Hello Webpack bundled JavaScript Project',
                template: path.join(__dirname, './public/index.html'),
            })
        ],

        devServer: {
            host: '0.0.0.0',
            https: false,
            disableHostCheck: true,
            port: 6001,
            stats: { colors: true },
            compress: true,
            contentBase: [path.join(__dirname, '/dist/')],
            watchContentBase: true
        }
    };

    return config;
};