let path=require('path')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./build')
    },
    devServer:{},
    module:{},
    plugins:[],
    mode:'development',
    resolve:{}
}