const path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development', //development,production,none
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(png|jp(e*)g|svg|html)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'img/[name].[ext]'//[hash]-[name].[ext]
                        }
                    }
                ]
            },{
                test: /\.(ttf|woff2|woff|eot)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1, // Convert images < 8kb to base64 strings
                            name: 'semantic/themes/default/assets/fonts/[name].[ext]'//[hash]-[name].[ext]
                        }
                    }
                ]
            }

        ]
    },
    devtool: false,
    optimization: {
        minimize: true
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
