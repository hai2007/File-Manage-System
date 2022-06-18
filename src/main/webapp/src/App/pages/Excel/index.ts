import { Component } from 'nefbl'
import OpenWebExcel from 'open-web-excel';

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-excel",
    template,
    styles: [style]
})
export default class {

    $mounted() {

        let owe = new OpenWebExcel({

            // 编辑器挂载点(必选)
            el: document.getElementById('owe'),

            // 初始化文本（可选）
            // 此内容一般由程序生成（也就是下面的 ```owe.valueOf``` 方法返回的值），初始化的时候不传递即可
            // file: json

        })

    }

}
