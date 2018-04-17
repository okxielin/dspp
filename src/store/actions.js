import { login } from '../utils/request.js'

let actions = {
    getToken ({commit}, {data, notify, router}) {
        login(data).then((res) => {
            if(res.success == 0){
                commit('saveToken', res.token);
                commit('saveUser', res.user.name);
                localStorage.setItem('token', res.token)
                localStorage.setItem('username', res.user.name)
                
                notify({
                    title: '登录成功',
                    message: '登录首页成功',
                    type: 'success'
                });
                setTimeout(() => {
                    router.push({
                        path: '/home'
                    })
                }, 1000)
            } else {
                notify({
                    title: '登录失败',
                    message: '姓名和密码有错',
                    type: 'error'
                })
            }
        })
    }
}

export default actions