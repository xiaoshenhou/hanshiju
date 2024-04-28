import {createRouter,createWebHistory} from 'vue-router'

const constantRoutes = [
    {
        path:'/',
        redirect:'/dingding'
    },
    {
        path:'/home',
        name:'home',
        component:()=> import('@/view/home/index.vue')
    },
    {
        path:'/magnifier',
        name:'magnifier',
        component:()=> import('@/view/magnifier/index.vue')
    },
    {
        path:'/login',
        name:'login', 
        component:()=> import('@/view/login/index.vue')
    },
    {
        path:'/taobao',
        name:'taobao', 
        component:()=> import('@/view/taobao/index.vue')
    },
    {
        path:'/table',
        name:'table', 
        component:()=> import('@/view/table/index.vue')
    },
    {
        path:'/map',
        name:'map', 
        component:()=> import('@/view/map/index.vue')
    },
    {
        path:'/video',
        name:'video', 
        component:()=> import('@/view/video/index.vue')
    },
    {
        path:'/echarts',
        name:'echarts', 
        component:()=> import('@/view/echarts/index.vue')
    },
    {
        path:'/dingding',
        name:'dingding', 
        component:()=> import('@/view/dingding/index.vue')
    },
]


const router =  createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
    routes: constantRoutes,
    
})
// router.beforeEach((to,from,next)=>{
//     if(to.path == '/login'){
//         next()
//     }else{
//         if(localStorage.getItem('token')){
//             next()
//         }else{
//             next('/login')
//         }
//     }
   
// })
export default router
