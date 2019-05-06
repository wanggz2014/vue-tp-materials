import { login, getUserInfo, logout } from '@/api/user'
import { setToken, getToken } from '@/libs/util'
import config from '@/config'

const local=config.local();

export default {
  state: {
    userName: '',
    userId: '',
    token: getToken(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  getters: {

  },
  actions: {
    // 登录
    handleLogin ({ commit }, { userName, password, url }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        //本地测试,不同后端交互
        if(local){
          if(userName=='admin'&&password=='admin'){
            commit('setToken', 'admin_token')
            resolve({
              status:200,
              data:{
                success:true
              }
            })
          }else{
            reject()
          }
        }
        
        //后端验证
        login({
          userName,
          password
        }).then(res => {
          const data = res.data
          if(res.status==200&&data.success){
            console.log('token:'+data.details)
            commit('setToken', data.details)
            resolve()
          }else{
            reject("not success from service")
          }
        }).catch(err => {
          reject(err)
        })

      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        if(local){
          commit('setToken', '')
          resolve()
          return;
        }
        logout(state.token).then(res => {
          const data = res.data
          if(res.status==200&&data.success){
            commit('setToken', '')
            resolve()
          }else{
            reject("not success from service")
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        if(local){
          const data={
            userName:'admin',
            userId:'1'
          }
          commit('setUserName', data.userName);
          commit('setUserId', data.userId);
          commit('setHasGetInfo', true)
          resolve(data)
          return;
        }
        try {
          getUserInfo(state.token).then(res => {
            if(res.status!=200||!res.data.success){
              reject(res);
              return;
            }
            const data = res.data
            commit('setUserName', data.userName)
            commit('setUserId', data.userId)
            commit('setHasGetInfo', true)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
