import HttpRequest from './axios';
import Qs from 'qs'


const axios = new HttpRequest();
//如果想本地调试，将local设置为true

export const getTableData = ({requestParams,requestUrl,local}) => {
  console.log(requestUrl)
  console.log(requestParams)
  console.log(local)
  if(local){
    return new Promise(function (resolve) {
      const result={
        status:200,
        data:{
          success:true,
          message:'',
          details:[
            {
              name:'test',
              email:'wgz@163.com',
              createTime:'2019-12-01'
            }
          ]
        }
      }
      resolve(result);
    }); 
  }
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const addTableData = ({requestParams,requestUrl}) => {
  console.log(requestParams)
  console.log(requestUrl)
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const delTableData = ({requestParams,requestUrl,local}) => {
  console.log(requestUrl)
  console.log(requestParams)
  if(local){
    return new Promise(function (resolve) {
      const result={
        success:true
      }
      resolve(result);
    }); 
  }
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const editTableData = ({requestParams,requestUrl,local}) => {
  console.log(requestUrl)
  console.log(requestParams)
  if(local){
    return new Promise(function (resolve) {
      const result={
        success:true
      }
      resolve(result);
    }); 
  }
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}

export const getTableMeta = ({requestParams,requestUrl,local}) => {
  console.log(requestUrl)
  console.log(requestParams)
  if(local){
    return new Promise(function (resolve, reject) {
      const result={
        status:200,
        data:{
          success:true,
          message:'',
          details:[
            { title: 'Email', key: 'email', editable: true },
            { title: 'Name', key: 'name', editable: true },
            { title: 'Create-Time', key: 'createTime' }
          ]
        }
      }
      resolve(result);
    }); 
  }
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}

export const responseHandle=(res,message,handle)=>{
  if(res.status!=200){
    console.log(res);
    message.error("数据请求出错，请核对");
    return false;
  }
  const data=res.data;
  if(!data.success){
    message.error(data.message);
    return false;
  }
  if(handle!=undefined){
    return handle(data.details);
  }
  return true;
}



