<template>
  <div class="layout" v-if="display">
    <Layout>
      <!-- header -->
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="login" @on-select="turnToLogout" >
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="login">
              <Icon type="ios-analytics"></Icon>
              退出
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{ padding: '0 50px' }">
        <Breadcrumb :style="{ margin: '16px 0' }">
          <BreadcrumbItem v-for="crumb in breadcrumb" v-bind:key="crumb">
            {{crumb}}
          </BreadcrumbItem>
        </Breadcrumb>
        <Content
          :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }"
        >
          <Layout>
            <!-- sider -->
            <Sider hide-trigger :style="{ background: '#fff' }">
              <Menu
                :active-name="active"
                theme="light"
                width="auto"
                :open-names="open"
                @on-select="turnToPage" 
                v-for="sub in menuData" 
                v-if="sub.show"
                v-bind:key="sub.subMenu">

                <Submenu :name="sub.subMenu">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{sub.subTitle}}
                  </template>
                  <MenuItem :name="menu.name" v-for="menu in sub.items" v-bind:key="menu.name">{{menu.title}}</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content
              :style="{
                padding: '24px',
                minHeight: '530px',
                background: '#fff',
              }"
            >
              <!-- Content -->
              <slot></slot>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <!-- footer -->
      <Footer class="layout-footer-center">
        2011-2016 &copy; TalkingData
      </Footer>
    </Layout>
  </div>
</template>

<script>
import {getMenuData,getMenuDetail,toUrl,responseHandle} from './libs/menu'
import Vue from 'vue';
import { mapActions } from 'vuex';
import Vue2Storage from 'vue2-storage';
Vue.use(Vue2Storage)

const DEFAULT_MENU_ITEM="tenant-manager";
const DEFAULT_MENU_DATA=[{
    "subMenu":"tenant",
    "subTitle":"租户管理",
    "show":true,
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
    "show":true,
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
    "show":true,
    "items":[
      {
        "name":"notify-search",
        "title":"消息查询",
        "url":"notifysearch.html"
      }
    ]
  },
  {
    "subMenu":"common",
    "subTitle":"管理",
    "show":false,
    "items":[
      {
        "name":"login",
        "title":"登陆",
        "url":"login.html"
      }
    ]
  }]

export default {
  name: 'AdminLayout',
  components: {},
  props:{
    initMenuData:{
      type:Array,
      default:function () {
        return DEFAULT_MENU_DATA
      }
    },
    menuUrl:String,
    defaultMenuItem:{
      type:String,
      default:DEFAULT_MENU_ITEM
    }
  },
  data: function(){
    return {
      menuData:[],
      active:'',
      open:'',
      breadcrumb:'',
      display:false
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut',
    ]),
    turnToPage (active) {
      toUrl(active,this.defaultMenuItem,this.$storage)
    },
    turnToLogout(active){
      if(this.$store!=undefined){
        this.handleLogOut().then(res => {
          this.turnToPage(active);
        }).catch(res=>{
          console.log(res);
          this.$Message.error('用户退出异常!!!')
        })
        return;
      }
      this.turnToPage(active);
    }
  },
  created:function(){
    getMenuData({
        menuData:this.initMenuData,
        menuUrl:this.menuUrl
    }).then(res=>{
      const obj=this;
      responseHandle(res,this.$Message,function(menuData){
        //列表信息
        obj.$storage.set('menuData',menuData, { ttl: 60 * 1000*60 });
        obj.menuData=menuData;

        //导航详情
        //console.log(obj.defaultMenuItem)
        const menuDetail=getMenuDetail(obj.$storage,obj.defaultMenuItem);
        obj.active=menuDetail.active;
        obj.open=menuDetail.open;
        obj.breadcrumb=menuDetail.breadcrumb;
        obj.display=true;
      })
    })
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  background-image: url('./libs/logo.png');
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
