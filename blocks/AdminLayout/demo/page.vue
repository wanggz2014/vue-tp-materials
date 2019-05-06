<template>
  <div className="demo-page">
    <Test :menuUrl="menuUrl" :defaultMenuItem="defaultMenuItem">
      <template #default >
        Default Slot
      </template>
    </Test>  
  </div>
</template>

<script>
import Test from '../src/index';

const data=[{
    "subMenu":"tenant",
    "subTitle":"租户管理",
    "items":[
      {
        "name":"tenant-manager",
        "title":"信息管理",
        "url":"tenantmanager.html"
      }
    ]
  },
  {
    "subMenu":"log",
    "subTitle":"日志查看",
    "items":[
      {
        "name":"log-auth",
        "title":"授权认证",
        "url":"logauth.html"
      },
      {
        "name":"log-status",
        "title":"节点状态",
        "url":"logstatus.html"
      }
    ]
  },
  {
    "subMenu":"notify",
    "subTitle":"消息中心",
    "items":[
      {
        "name":"notify-search",
        "title":"消息查询",
        "url":"notifysearch.html"
      }
    ]
  }];

export default {
  components: { Test },
  name: 'DemoPage',
  data:function() {
    return {
      initMenuData:data,
      defaultMenuItem:'useradd',
      menuUrl:"http://localhost:8088/rest/menu"
    }
  }
}
</script>

<style>
  .demo-page {
  }
</style>