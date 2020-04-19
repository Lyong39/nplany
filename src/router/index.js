import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index'
import forgetpsd from "../views/login/componnets/forgetpsd";
import register from '../views/register/index'
import index from '../views/index/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/forgetpsd',
        component: forgetpsd
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/',
        component: index
    }
]

const router = new VueRouter({
    routes
})

export default router
