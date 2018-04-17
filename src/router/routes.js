import home from './../views/home/home.vue'
import manage from './../views/manage/manage.vue'
import login from './../views/login/login.vue'
import plan from './../views/plan/plan.vue'
import unit from './../views/unit/unit.vue'
import creative from './../views/creative/creative.vue'

let routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/plan',
        name: 'plan',
        component: plan
    },
    {
        path: '/unit',
        name: 'unit',
        component: unit
    },
    {
        path: '/creative',
        name: 'creative',
        component: creative
    },
    {
        path: '/manage',
        name: 'manage',
        component: manage
    }
]

export default routes