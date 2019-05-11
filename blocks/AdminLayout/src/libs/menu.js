import HttpRequest from './axios';
import Qs from 'qs'

const axios = new HttpRequest();

// /**
//  * 获取导航的父节点
//  * @param {当前导航item} activeMenu 
//  */
// function getSubName(activeMenu,store){
//   const menuData=store.get('menuData');
//   for(let i=0;i<menuData.length;i++){
//     for(let j=0;j<menuData[i].items.length;j++){
//       const menu=menuData[i].items[j]
//       if(menu.name==activeMenu){
//         return menuData[i].subMenu;
//       }
//     }
//   }
//   return null;
// }

/**
 * 获取当前导航信息
 * @param {当前导航} activeMenu 
 */
function getMenu(activeMenu,menuData){
  for(let i=0;i<menuData.length;i++){
    for(let j=0;j<menuData[i].items.length;j++){
      const menu=menuData[i].items[j]
      if(menu.name==activeMenu){
        return menu;
      }
    }
  }
}

/**
 * 获取菜单信息
 */
export const getMenuData=({menuData,menuUrl,token}) =>{
  if(menuUrl!=undefined){
    //url请求获取信息
    return axios.request({
      url: menuUrl,
      method: 'post',
      data:Qs.stringify({
        token
      })
    })
  }
  return new Promise(function (resolve) {
    const result={
      status:200,
      data:{
        code:200,
        message:'',
        data:menuData
      }
    }
    resolve(result);
  }); 
}

/**
 * 获取当前打开页菜单信息
 */
export const getMenuDetail=(menuData) =>{
  const url=window.location.pathname;
  const result={
    breadcrumb:[],
    active:null,
    open:[]
  };
  for(let i=0;i<menuData.length;i++){
    const crumb=[menuData[i].subTitle]
    for(let j=0;j<menuData[i].items.length;j++){
      const menu=menuData[i].items[j]
      if(url.indexOf(menu.url)>-1||menu.url.indexOf(url)>-1){
        //console.log(menu.url)
        crumb.push(menu.title)
        result.breadcrumb=crumb
        result.active=menu.name
        result.open=[menuData[i].subMenu]
        return result
      }
    }
  }
  return result;

}

export const toUrl=(activeMenu,menuData) =>{
  const url=getMenu(activeMenu,menuData).url;
  window.location.href=url;
}

export const responseHandle=(res,message,handle)=>{
  if(res.status!=200){
    console.log(res);
    message.error("数据请求出错，请核对");
    return false;
  }
  const response=res.data;
  console.log(response)
  if(response.code!=200||response.data==null){
    message.error(response.message);
    return false;
  }
  if(handle!=undefined){
    return handle(response.data);
  }
  return true;
}