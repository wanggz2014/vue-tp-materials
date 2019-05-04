import Page from './page';
import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';


const router = new Router({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/:local?', component: Page },
  ],
});

Vue.use(iView,{
  transfer:true
});

Vue.use(Router);

new Vue({
  router,
}).$mount('#app');