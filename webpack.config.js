let path=require('path')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./build')
    },
    devServer:{
        contentBase:"./build",
        port:3000,
        compress:true,
        open:true
    },
    module:{},
    plugins:[],
    mode:'development',
    resolve:{}
}