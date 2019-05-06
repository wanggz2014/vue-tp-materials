import HttpRequest from './axios';

const axios = new HttpRequest();

/**
 * 获取导航的父节点
 * @param {当前导航item} activeMenu 
 */
function getSubName(activeMenu,store){
  const menuData=store.get('menuData');
  for(let i=0;i<menuData.length;i++){
    for(let j=0;j<menuData[i].items.length;j++){
      const menu=menuData[i].items[j]
      if(menu.name==activeMenu){
        return menuData[i].subMenu;
      }
    }
  }
  return null;
}

/**
 * 获取当前导航信息
 * @param {当前导航} activeMenu 
 */
function getMenu(activeMenu,store){
  const menuData=store.get('menuData');
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
export const getMenuData=({menuData,menuUrl}) =>{
  if(menuUrl!=undefined){
    //url请求获取信息
    return axios.request({
      url: menuUrl,
      method: 'post'
    })
  }
  return new Promise(function (resolve) {
    const result={
      status:200,
      data:{
        success:true,
        message:'',
        details:menuData
      }
    }
    resolve(result);
  }); 
}

/**
 * 获取当前打开页菜单信息
 */
export const getMenuDetail=(store,defaultMenuItem) =>{
  const active=store.get('currentEnum',defaultMenuItem);
  const subName=getSubName(active,store)
  const result={
    breadcrumb:[],
    active:active,
    open:[subName]
  };
  const menuData=store.get('menuData');
  for(let i=0;i<menuData.length;i++){
    if(menuData[i].subMenu!=subName){
      continue;
    }
    result.breadcrumb.push(menuData[i].subTitle);
    for(let j=0;j<menuData[i].items.length;j++){
      const menu=menuData[i].items[j]
      if(menu.name==active){
        result.breadcrumb.push(menu.title)
        break;
      }
    }
    break;
  }
  return result;

}

export const toUrl=(activeMenu,defaultMenuItem,store) =>{
  if(activeMenu=='login'){
    store.set('currentEnum',defaultMenuItem, { ttl: 60 * 1000*60 });
  }else{
    store.set('currentEnum',activeMenu, { ttl: 60 * 1000*60 });
  }
  const url=getMenu(activeMenu,store).url;
  if(url.indexOf("http")>-1){
    window.location.href=url;
    return;
  }
  window.location.href='/'+url;
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