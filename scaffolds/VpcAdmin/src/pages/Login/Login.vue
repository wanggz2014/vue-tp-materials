<style lang="less">
  .login{
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/login-bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    &-con{
        position: absolute;
        right: 160px;
        top: 50%;
        transform: translateY(-60%);
        width: 300px;
        &-header{
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            padding: 30px 0;
        }
        .form-con{
            padding: 10px 0 0;
        }
        .login-tip{
            font-size: 10px;
            text-align: center;
            color: #c3c3c3;
        }
    }
}
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <LoginForm @on-success-valid="handleSubmit"></LoginForm>
          <p class="login-tip">{{message}}</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
import { mapActions } from 'vuex'
import Vue from 'vue'
import Vue2Storage from 'vue2-storage';
Vue.use(Vue2Storage)

export default {
  components: {
    LoginForm
  },
  data:function(){
    return {
      message:"请输入用户名与密码"
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$storage.remove('currentEnum')
          window.location.href=this.$config.homeUrl();
        })
      }).catch(res=>{
        console.log(res);
        this.message="用户名或密码有误!!"
      })
    }
  }
}
</script>
