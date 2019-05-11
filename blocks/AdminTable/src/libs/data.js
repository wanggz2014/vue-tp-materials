import HttpRequest from './axios';
import Qs from 'qs'
import Cookies from 'js-cookie';


const axios = new HttpRequest();
//如果想本地调试，将local设置为true


/**
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
const getHandledValue = num => {
  return num < 10 ? '0' + num : num
}

/**
 * @param {Number} d 传入的时间
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
const getDate = (d, startType) => {
  const year = d.getFullYear()
  const month = getHandledValue(d.getMonth() + 1)
  const date = getHandledValue(d.getDate())
  const hours = getHandledValue(d.getHours())
  const minutes = getHandledValue(d.getMinutes())
  const second = getHandledValue(d.getSeconds())
  let resStr = ''
  if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second
  else resStr = month + '-' + date + ' ' + hours + ':' + minutes
  return resStr
}


const dataCheck=(data)=>{
  for(const attr in data){
    if(data[attr] instanceof Date){
      const date=data[attr];
      data[attr]=getDate(date,'year');
    }
  }
  return data;
}

const setToken=(params)=>{
  params.token= Cookies.get('token')
}


export const getTableData = ({requestParams,requestUrl}) => {
  console.log(requestUrl)
  setToken(requestParams)
  console.log(requestParams)
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const addTableData = ({requestParams,requestUrl}) => {
  console.log(requestUrl)
  setToken(requestParams)
  requestParams=dataCheck(requestParams);
  console.log(requestParams)
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const delTableData = ({requestParams,requestUrl}) => {
  console.log(requestUrl)
  setToken(requestParams)
  console.log(requestParams)
  return axios.request({
    url: requestUrl,
    method: 'post',
    data:Qs.stringify(requestParams)
  })
}


export const editTableData = ({requestParams,requestUrl}) => {
  console.log(requestUrl)
  setToken(requestParams)
  requestParams=dataCheck(requestParams);
  console.log(requestParams)
  
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
  const response=res.data;
  console.log(response)
  if(response.code!=200){
    message.error(response.message);
    return false;
  }
  if(handle!=undefined){
    return handle(response.data);
  }
  return true;
}



