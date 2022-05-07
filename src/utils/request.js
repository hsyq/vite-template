import axios from "axios"

import { ElMessage } from "element-plus"

axios.defaults.baseURL = import.meta.VITE_BASE_API

axios.defaults.timeout = 10000

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    ElMessage.error(error.message)
    throw error
  }
)

axios.interceptors.response.use(
  (response) => {
    const { code, data, message } = response.data

    // 请求成功
    if (code === 0) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default axios
