const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const mode = "development";

module.exports = {
    mode: mode,
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets')
    },
    module: {
        rules: [            
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env", {
                                    useBuiltIns: "usage",
                                    corejs: 3
                                }
                            ]
                        ]                        
                    }
                }
            },
        
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /(node_modules|bower_components)/,
                use: ["file-loader?name=images/[name].[ext]"]
            },

            {
                test: /\.(woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                use: ["file-loader?name=fonts/[name].[ext]"],
            },

            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function(){
                                return [require("autoprefixer")({ grid: false })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new CleanWebpackPlugin()
    ],
}