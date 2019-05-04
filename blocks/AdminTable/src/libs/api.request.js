import HttpRequest from './axios'
//const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const baseUrl = "http://localhost:8080/rest";
const axios = new HttpRequest(baseUrl)
export default axios
