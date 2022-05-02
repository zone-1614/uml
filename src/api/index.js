import axios from 'axios'

// axios配置
axios.defaults.baseURL = "http://localhost:8080/api";

export default {
    userLogin: (username, password) => {
        return axios.post(
            "url",
            { username, password }
        )
    },
    getPostDetailByPostId: (id) => {
        return axios.get(
            "url",
            { id }
        )
    },
    // 主页的post
    getPosts: () => {
        return axios.get(
            "posts"
        )
    },
    // 主页的轮播图
    getCarousels: () => {
        return axios.get(
            "carousels"
        )
    }
}