// 网络请求方法
import axios from 'axios'
const ajax = axios.create({ // 自定义 axios 对象
  baseURL: 'http://localhost:3000/' // 服务器基地址
})

export default ajax
