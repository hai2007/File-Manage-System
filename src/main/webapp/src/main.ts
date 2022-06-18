import { platform } from 'nefbl'
import normalize from "@hai2007/style/normalize.css"

// 兼容文件
import '@hai2007/polyfill/Promise.js'

// 引入主模块
import appModule from "./app.module"

// 测试（测试完毕请注释掉）
// import './transfer/test.spec'

// 先获取平台实例
platform({

    // 框架管理的区域
    el: document.getElementById('root'),

    // 全局样式
    styles: [normalize]

})

    // 然后启动主模块
    .bootstrap(appModule)

// 监听浏览器点击了回退按钮
if (window.addEventListener) {
    window.addEventListener("hashchange", () => {
        setTimeout(() => {
            window.location.reload()
        });
    }, false)
} else {
    console.error('添加路由改变监听失败~')
}
