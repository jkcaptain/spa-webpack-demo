const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const { VueLoaderPlugin } = require('vue-loader');

// 打包进度条信息
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// 消息通知
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

// 归类打包信息
// const DashboardPlugin = require('webpack-dashboard/plugin');

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('node_modules/webpack-dev-server/client')
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [],
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: resolve('dist'), // dist 根目录
        hot: true,   // 是否开启热替换，无须手动刷新浏览器
        port: 8081,    // 端口
        open: true,     // 是否自动打开浏览器
        noInfo: true   // 不提示打包信息，错误和警告仍然会显示
    },
    plugins: [

        new VueLoaderPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),

        new ProgressBarPlugin(),
        
        new WebpackBuildNotifierPlugin(),

        // new DashboardPlugin()
    ]
}