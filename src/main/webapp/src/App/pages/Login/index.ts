import { Component } from 'nefbl'

import urlFormat from '../../../tool/urlFormat'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-login",
    template,
    styles: [style]
})
export default class {
    doLogin() {

        // 设置登录成功信号
        sessionStorage.setItem('islogin', 'yes')

        // 地址栏信息
        let urlObj = urlFormat(window.location.href)

        // 获取当前页面
        let pagename = urlObj.router[0]

        // 如果调整登录页面的时候就是登录页面
        if (pagename == 'login') {
            window.location.href = '#/home'
        } else {
            window.location.reload()
        }

    }
    toRegistry() {
        window.location.href = '#/registry'
    }
}
