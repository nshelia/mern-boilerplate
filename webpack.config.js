var webpack = require('webpack');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: [
        './app/app.jsx'
    ],
    output: {
        path: __dirname,
        filename: './public/dist/bundle.min.js'
    },
    resolve: {
        modules: [
            'node_modules',
            path.join(__dirname,"app/components"),
            path.join(__dirname,"app/styles")
        ],
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader?minimize=true"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                             includePaths: [
                                path.resolve(__dirname, './node_modules/foundation-sites/scss')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    ],
    devtool: 'cheap-module-eval-source-map'
};