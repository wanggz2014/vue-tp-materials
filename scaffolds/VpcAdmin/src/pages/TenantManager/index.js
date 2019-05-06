import TenantManager from './TenantManager'; 
import Vue from 'vue';
import iView from 'iview';
import { beforeEach, afterEach } from '@/router';
import store from '@/store';
import config from '@/config';
import 'iview/dist/styles/iview.css';
import Router from 'vue-router';

const router = new Router({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/:local?', component: TenantManager },
  ],
});
router.beforeEach(beforeEach)
router.afterEach(afterEach)

Vue.prototype.$config = config

Vue.use(Router);
Vue.use(iView,{
  transfer:true
});

new Vue({
  router,
  store
}).$mount('#app');