import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    isLogin: false, //是否登录，用来判断右上角显示登陆注册 / 头像
    // 当前登录的用户
    user: {
      username: '芜湖起飞',
      avatarURL: 'https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png',
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
    loading(state) {
      return state.loading
    },
    isLogin(state) {
      return state.isLogin;
    },
    getUser(state) {
      return state.user;
    }
  }
})
