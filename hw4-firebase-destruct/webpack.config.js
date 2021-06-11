const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HTMLWebpackPlugin ({
            filename: 'task1.html',
            template: './src/templates/task1.html'
        }),
        new HTMLWebpackPlugin ({
            filename: 'task2.html',
            template: './src/templates/task2.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['sass-loader', 'css-loader', 'scss-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            sources: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 4200
    }
}
