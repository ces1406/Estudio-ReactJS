const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    entry:'./index.js',
    output: {
        filename:'bundle.[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve:{
                    extensions:['.js']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/public/index.html'
        })
    ]
}