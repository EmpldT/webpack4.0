let path=require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.[hash:8].js',
        path:path.resolve('./build')
    },
    devServer:{
        contentBase:"./build",
        port:3000,
        compress:true,
        open:true
    },
    module:{},
    plugins:[
        new cleanWebpackPlugin(['./build']),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'忽了个大悠',
            hash:true
        })
    ],
    mode:'development',
    resolve:{}
}