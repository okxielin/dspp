import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './../store/store'

Vue.use(VueRouter)
let router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    let isLogin = checkLoginStatus()
    if(to.name == 'login'){
        next()
    } else {
        if(!isLogin){
            next({
                name: 'login'
            })
        } else {
            next()
        }
    }
})

function checkLoginStatus(){
    let cltk = localStorage.getItem('token')
    if(cltk) {
        store.commit('saveUser', localStorage.getItem('username'))
    }
    return !! cltk
}

export default router