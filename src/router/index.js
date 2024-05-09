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
        path: '/json_format',
        name: 'json_format',
        component: () => import('@/views/tool/json_format.vue')
    }
]
const router = new vueRouter({
    routes
})

export default router