import vueRouter from "vue-router"
import Vue from "vue"

Vue.use(vueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/json',
        name: 'json',
        component: () => import('@/views/tool/json.vue')
    }
]
const router = new vueRouter({
    routes
})

export default router