import { tab } from './tab'
import { marquee } from './marquee'

tab()
marquee()

import './styles/index.css'
import './styles/index.less'

//1引入图片   也是图片的src属性
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
//2创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')
//3给src赋值
gif.src = gifSrc
png.src = pngSrc
//4插入节点
document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'

const fn = () => {
    console.log('你好');
}
console.log(fn);