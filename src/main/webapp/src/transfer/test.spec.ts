import xhr from './xhr'

// 注册

xhr("POST", 'registry.do', {
    username: "", // 用户名
    password: "", // 密码
    icon: "", // 头像
    remark: "", // 个性签名
}).then(data => {
    console.error(data)
}).catch(error => {
    console.error(error)
})

// 登录

xhr("POST", 'login.do', {
    username: "",
    password: ""
}).then(data => {
    console.error(data)
}).catch(error => {
    console.error(error)
})
