import { Component, ref } from 'nefbl'
import { isFunction } from "@hai2007/tool/type"

import urlFormat from '../tool/urlFormat'

import style from './index.scss'
import template from './index.html'

import pages from './pages/lazy-load'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    currentPage: any

    $setup() {
        return {
            currentPage: ref(null)
        }
    }

    $mounted() {

        // 地址栏信息
        let urlObj = urlFormat(window.location.href)

        // 获取当前页面
        let page = pages[urlObj.router[0]]

        // 如果未登录
        if (sessionStorage.getItem('islogin') != 'yes' && urlObj.router[0] != 'registry') {
            page = pages['login']
        }

        // 或者页面不存在
        else if (!isFunction(page)) {

            // 如果地址错误，跳转到首页
            page = pages['home']
        }

        // 打开页面
        page().then(data => {
            this.currentPage = data.default
        })

    }

}
