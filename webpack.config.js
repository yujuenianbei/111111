const path = require("path");
const webpack = require("webpack");

const HtmlwebpackPlugin = require('html-webpack-plugin');

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
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
          //注意是数组

        //   热交换更换模板内容的
        new HtmlwebpackPlugin({
            title: '我只是小小的测试页'
        })//在目录下自动生成index.html，指定其title
          
   ],
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8080
      } 
}