const path = require("path");
module.exports={
    devtool: 'eval-source-map',
    entry: __dirname + "/js/test1.js",
    output:{
        path: path.resolve(__dirname, './asset'),
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.css/,loader:"style-loader!css-loader"
            }
        ]
    },
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
      } 
}