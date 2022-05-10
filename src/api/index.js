import axios from 'axios'
import qs from 'qs'
import user from './user'
// axios配置
axios.defaults.baseURL = "http://localhost:8080/api";

export default {
    user,
    createPost: () => {

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
            "post/posts/10"
        )
    },
    // 主页的轮播图
    getCarousels: () => {
        return axios.get(
            "post/carousels"
        )
    }
}