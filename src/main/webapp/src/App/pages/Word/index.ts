import { Component } from 'nefbl'
import OpenWebWord from 'open-web-word';

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-word",
    template,
    styles: [style]
})
export default class {

    $mounted() {

        let oww = new OpenWebWord({

            // 编辑器挂载点(必选)
            el: document.getElementById('oww')

        })

    }

}
