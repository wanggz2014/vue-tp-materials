import axios from './api.request'
import Qs from 'qs'

//如果想本地调试，将local设置为true
const local=false;

export const getTableData = ({requestParams,requestUrl,baseUrl}) => {
  console.log(requestUrl)
  console.log(requestParams)
  if(local){
    return new Promise(function (resolve, reject) {
      const result={
        data:[
          {
            name:'test',
            email:'wgz@163.com',
            createTime:'2019-12-01'
          }
        ]
      }
      resolve(result);
    }); 
  }
  return axios.request({
    baseURL:baseUrl,
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const addTableData = ({requestParams,requestUrl,baseUrl}) => {
  console.log(requestParams)
  console.log(requestUrl)
  return axios.request({
    baseURL:baseUrl,
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const delTableData = ({requestParams,requestUrl,baseUrl}) => {
  console.log(requestUrl)
  console.log(requestParams)
  if(local){
    return new Promise(function (resolve, reject) {
      resolve();
    }); 
  }
  return axios.request({
    baseURL:baseUrl,
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const editTableData = ({requestParams,requestUrl}) => {
  console.log(requestUrl)
  console.log(requestParams)
  if(local){
    return new Promise(function (resolve, reject) {
      resolve();
    }); 
  }
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}



