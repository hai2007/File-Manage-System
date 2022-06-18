import xhr from '@hai2007/xhr'

// 提供请求的xhr方法封装

export default (method: string, url: string, data?: any) => {
    return new Promise((resolve, reject) => {
        xhr({

            method,// 请求方法
            url: "http://localhost:9999/" + url,// 请求地址
            data,// 请求数据，可选
            header: {},// 请求头，可选
            timeout: 1000// 请求超时时间，可选

        }, function (data) {

            // 成功回调
            resolve(data)

        }, function (error) {

            // 错误回调
            reject(error)

        })
    })
}
