import axios from 'axios'
import { ElNotification , ElMessageBox, ElMessage, ElLoading } from 'element-plus'


const service = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_URL,
    timeout:10000
})

service.interceptors.request.use(
    (config)=>{
        if(localStorage.getItem('token')){
            config.headers['token'] = localStorage.getItem('token')
        }
        return config
    },
    (error)=>{
       return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (res)=>{
        if(res.data.code ===200 ) {
            return res.data.data
        }else if(res.data){

        }
    },
    (error)=>{
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
          })
          return Promise.reject(error)
    }

)


export default service
