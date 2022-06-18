
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/Login/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var urlFormat =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('36');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('37');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "app-login",
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "doLogin",
    value: function doLogin() {
      // 设置登录成功信号
      sessionStorage.setItem('islogin', 'yes'); // 地址栏信息

      var urlObj = urlFormat(window.location.href); // 获取当前页面

      var pagename = urlObj.router[0]; // 如果调整登录页面的时候就是登录页面

      if (pagename == 'login') {
        window.location.href = '#/home';
      } else {
        window.location.reload();
      }
    }
  }, {
    key: "toRegistry",
    value: function toRegistry() {
      window.location.href = '#/registry';
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/Login/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "/* 兼容老浏览器 */\n .login{\n\nbackground: #6da6be;\n/* Chrome 10-25, Safari 5.1-6 */\nbackground: -webkit-linear-gradient(to right, #6da6be, #4b859e, #6da6be);\n/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\nbackground: linear-gradient(to right, #6da6be, #4b859e, #6da6be);\n\nheight: 100vh;\n\nline-height: 100vh;\n\ntext-align: center;\n\n}\n\n .login>.view{\n\nwidth: 260px;\n\nline-height: 1em;\n\ndisplay: inline-block;\n\nbackground-color: white;\n\npadding: 70px 20px;\n\nborder-radius: 5px;\n\nvertical-align: middle;\n\n}\n\n .login>.view>h2{\n\nfont-size: 20px;\n\npadding-bottom: 20px;\n\ntext-align: left;\n\n}\n\n .login>.view>.item{\n\nmargin-top: 20px;\n\n}\n\n .login>.view>.item>label{\n\nfont-size: 0;\n\ndisplay: inline-block;\n\nwidth: 30px;\n\nheight: 20px;\n\nvertical-align: middle;\n\n}\n\n .login>.view>.item>label.icon1{\n\nbackground-image: url('./image/icon1.png');\n\n}\n\n .login>.view>.item>label.icon2{\n\nbackground-image: url('./image/icon2.png');\n\n}\n\n .login>.view>.item>label{\n\nbackground-repeat: no-repeat;\n\nbackground-position: left center;\n\n}\n\n .login>.view>.item>input{\n\nborder: none;\n\noutline: none;\n\nborder-bottom: 1px solid rgb(190, 186, 186);\n\nwidth: 190px;\n\nfont-size: 12px;\n\npadding: 5px;\n\n}\n\n .login>.view>.item.toRight{\n\ntext-align: right;\n\nmargin-top: 10px;\n\n}\n\n .login>.view>.item.toRight>a{\n\nfont-size: 12px;\n\ntext-decoration: underline;\n\n}\n\n .login>.view>button{\n\nwidth: 90%;\n\ndisplay: block;\n\nmargin: auto;\n\nmargin-top: 30px;\n\ncolor: white;\n\nbackground-color: rgb(7, 109, 150);\n\nfont-size: 14px;\n\nline-height: 30px;\n\nborder-radius: 5px;\n\noutline: none;\n\nborder: none;\n\ncursor: pointer;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/Login/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"login\">\r\n    <div class=\"view\">\r\n        <h2>登录</h2>\r\n        <div class=\"item\">\r\n            <label for=\"username\" class=\"icon1\">用户名：</label>\r\n            <input type=\"text\" placeholder=\"请输入您的用户名\">\r\n        </div>\r\n        <div class=\"item\">\r\n            <label for=\"password\" class=\"icon2\">密码：</label>\r\n            <input type=\"password\" placeholder=\"请输入您的密码\">\r\n        </div>\r\n        <div class=\"item toRight\">\r\n            <a href=\"javascript:void(0)\" ui-on:click=\"toRegistry\">没有账号？去注册</a>\r\n        </div>\r\n        <button ui-on:click=\"doLogin\">登录</button>\r\n    </div>\r\n</div>\r\n"
  
    return __etcpack__scope_bundle__;
}
