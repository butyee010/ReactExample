const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');
const resourcePath = path.join(__dirname, 'public');



module.exports = {
    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(resourcePath, 'assets/bulma-0.6.1/css/bulma.css'),
      path.resolve(resourcePath, 'assets/font-awesome-4.7.0/css/font-awesome.css'),
      path.resolve(sourcePath, 'index.js'),
    ],
    output: {
        publicPath: '/static/',
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: false,
        historyApiFallback: true,
        //headers: { 'Access-Control-Allow-Origin': '*' }
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: false,
                    plugins: [
                        'react-hot-loader/babel'
                    ]
                },
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            sourceMap: true,
                            module: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        query: {
                            outputStyle: 'expanded',
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    }
};
