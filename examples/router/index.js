import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Index = () => import("../components/index.vue")
const Button = () => import("../components/button.vue")
const Toast = () => import("../components/toast.vue")
const Cell = () => import("../components/cell.vue")
const Header = () => import("../components/header.vue")
const Radio = () => import("../components/radio.vue")
const Input = () => import("../components/input.vue")

const routes = [
    { path: '/', component: Index },
    { path: '/Button', component: Button },
    { path:'/Toast',component:Toast},
    { path:'/Cell',component:Cell},
    { path:'/Header',component:Header},
    { path:'/Radio',component:Radio},
    { path:'/Input',component:Input},
];

const router = new VueRouter({
    routes
});
export default router;