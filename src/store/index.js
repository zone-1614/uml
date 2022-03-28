import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false, //是否登录，用来判断右上角显示登陆注册 / 头像
    // 当前登录的用户
    user: {
      username: '芜湖起飞',
      avatarURL: 'https://gitee.com/zone-1614/my-picgo/raw/master/xh.png',
      gender: 0, // 0 女  1 男
    },
    // 注册的用户
    registerUser: {
      username: "",
      password: "",
      gender: ""
    }
  },
  mutations: {
    changeIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    login(state, user) {
      state.isLogin = true;
      state.user = user;
    },
    logout(state) {
      state.isLogin = false;
      state.user = {};
    }
  },
  actions: {
    login(state, username, password) {
      setTimeout(() => {
        api.userLogin(username, password)
      }, 2000)
    }
  },
  modules: {
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    getUser(state) {
      return state.user;
    }
  }
})
