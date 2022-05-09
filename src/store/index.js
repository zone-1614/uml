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
      nickname: '',
      avatar: '',
      gender: 0, // 0 女  1 男
    },
    // 注册的用户
    registerUser: {
      nickname: "",
      password: "",
      gender: ""
    }
  },
  mutations: {
    changeIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    login(state, nickname, password) {
      api.userLogin(nickname, password).then(({data}) => {
        state.isLogin = true;
        state.user = data;
        console.log(data)
      })
    },
    logout(state) {
      state.isLogin = false;
      state.user = {};
    }
  },
  actions: {
    login(state, nickname, password) {
      api.userLogin(nickname, password).then(({user}) => {
        state.isLogin = true;
        state.user = user;
        console.log(user)
      })
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
