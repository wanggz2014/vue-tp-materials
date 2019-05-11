export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'VPC管理中心',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeUrl: function(){
    return '/index.html';
  },
    /**
   * @description api请求基础路径
   */
  baseUrl: function(){
    return this.env=='dev'?'http://localhost:8099/rest/':'https://produce.com';
  },

  /**
   * 是否使用本地模拟数据
   */
  local:true,

  env:'dev'
}
