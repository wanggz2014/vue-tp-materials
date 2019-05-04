const DEFAULT_MENU_ITEM="tenant-manager";
const menuData=[{
    "subMenu":"tenant",
    "subTitle":"租户管理",
    "items":[
      {
        "name":"tenant-manager",
        "title":"信息管理"
      }
    ]
  },
  {
    "subMenu":"log",
    "subTitle":"日志查看",
    "items":[
      {
        "name":"log-auth",
        "title":"授权认证"
      },
      {
        "name":"log-status",
        "title":"节点状态"
      }
    ]
  },
  {
    "subMenu":"notify",
    "subTitle":"消息中心",
    "items":[
      {
        "name":"notify-search",
        "title":"消息查询"
      }
    ]
  }]

/**
 * 获取菜单信息
 */
export const getMenuData=() =>{
  return menuData;
}

/**
 * 获取当前打开页菜单信息
 */
export const getMenuDetail=(store) =>{
  const active=store.get('currentEnum',DEFAULT_MENU_ITEM);
  const subName=active.split('-')[0]
  const result={
    breadcrumb:[],
    active:active,
    open:[subName]
  };
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

export const toUrl=(activeMenu,store) =>{
  store.set('currentEnum',activeMenu, { ttl: 60 * 1000*60 });
  const pageName=activeMenu.replace("-","")+".html";
  window.location.href='/'+pageName;
}




