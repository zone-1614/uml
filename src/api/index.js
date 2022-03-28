import axios from 'axios'

// axios配置
axios.defaults.baseURL = "http://localhost:8080";

export default {
    userLogin: (username, password) => {
        return axios.post(
            "url",
            {username, password}
        )
    },
}