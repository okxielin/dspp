import Vue from 'vue'
import axios from 'axios'
// 创建一个新的实例
let instance = axios.create({
    headers: {
        "plantfrom": "PC"
    },
    baseURL: 'http://localhost:9000'
})
// 请求拦截
instance.interceptors.request.use((config) => {
    // console.log(config)
    config.headers.token = localStorage.getItem('token') || ""
    return config
}, (err) => {
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use((response) => {
    if(response.status == 200){
        return response.data
    } else{
        return Promise.reject({
            status: response.status
        })
    }
}, (err) => {
    return Promise.reject(err)
})

// Vue.prototype.$http = instance
Object.defineProperty(Vue.prototype, '$http', {
    value: instance
})

export default instance

export function login (loginInfo) {
return  new Promise((reslove, reject) => {
        instance.post('/dsp-admin/user/login', loginInfo).then(res => {
            reslove(res)
        })
    })
}