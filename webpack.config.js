

// 引入生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { join } = require('path')

module.exports = {
    // mode: "production",
    //修改入口,相对路径
    entry: "./src/main.js",
    // 修改出口
    output: {
        path: join(__dirname, ('lib')),
        // 修改输出的文件名
        filename: 'webpack-demo.js',
        //删除上次的文件夹再打包
        // clean: true

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        // yarn sever 自动打开浏览器
        open: true,
        // 自定义端口号 0-65535
        port: 65535
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                //从后往前解析
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|gif|jpeg)$/i,
                // type: "asset/resource"  需要每次都要请求
                // type: "asset/inline" 减少网络请求  图片转换成base64 将代码打包到JS文件中，缺点是打包后的文件体积会变大

                // 如果怕只写 asset 则以8KB为界限，超出8kb就打包成文件，小于8就转换成base64
                type: "asset/resource",
                // parser: {
                //     dataUrlCondition: {
                //         //指定字节大小限制  下行代码是将8kb界限设置为20kb界限
                //         maxSize: 20 * 1024
                //     }
                // }
                generator: {
                    filename: 'images/[hash:6][ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset/resource",
                // [hash:xx] 随意生成字符   [ext]为原文件后缀名
                generator: {
                    filename: 'fonts/[hash:6][ext]' //将文件存在文件夹里
                }
            },
            {
                test: /\.js$/i,
                /* {
                  loader:"babel-loader",
                  options:{
                    presets:["@babel/presets-env"]
                  }
                } */
                use: ["babel-loader"]
            }
        ]
    }

}