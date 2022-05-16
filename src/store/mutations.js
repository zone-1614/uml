const mutations = {
    changeIsLogin(state, isLogin) {
        state.isLogin = isLogin;
    },
    login(state, user) {
        state.user = user;
        state.isLogin = true;
    },
    logout(state) {
        state.isLogin = false;
        state.user = {};
    }
}

export default mutations;