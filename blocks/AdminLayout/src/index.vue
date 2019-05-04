<template>
  <div class="layout">
    <Layout>
      <!-- header -->
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="login" @on-select="turnToPage" >
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
              <slot name="content"></slot>
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
import {getMenuData,getMenuDetail,toUrl} from './libs/menu'
import Vue2Storage from 'vue2-storage';
import Vue from 'vue';

Vue.use(Vue2Storage)
export default {
  name: 'AdminLayout',
  components: {},
  data:function(){
    const menuDetail=getMenuDetail(this.$storage);
    return {
      menuData:getMenuData(),
      active:menuDetail.active,
      open:menuDetail.open,
      breadcrumb:menuDetail.breadcrumb
    }
  },
  methods: {
    turnToPage (active) {
      toUrl(active,this.$storage)
    }
    // turnToLogin (active) {
    //   toUrl(active)
    // }
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
