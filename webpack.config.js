const { join } = require('path')

module.exports = {
    //修改入口,相对路径
    entry: "./scr/main.js",
    // 修改出口
    output: {
        path: join(__diename, ('lib'))
    }
}