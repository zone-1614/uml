import axios from 'axios'
import qs from 'qs'
import user from './user'
import post from './post'
// axios配置
axios.defaults.baseURL = "http://localhost:8080/api";

export default {
    user,
    post,
    // 主页的轮播图
    getCarousels: () => {
        return axios.get(
            "post/carousels"
        )
    }
}