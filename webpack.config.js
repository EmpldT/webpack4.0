let path=require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry:{
        index:'./src/index.js',
        a:'./src/a.js'
    },
    output:{
        filename:'[name].[hash:8].js',
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
            filename:'a.html',
            template:'./src/index.html',
            title:'忽了个大悠',
            hash:true,
            chunks:['a']
        }),
        new HtmlWebpackPlugin({
            filename:'i.html',
            template:'./src/index.html',
            title:'忽了个大悠',
            hash:true,
            chunks:['index']
        })
    ],
    mode:'development',
    resolve:{}
}