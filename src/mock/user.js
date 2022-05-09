import Mock from 'mockjs'

export default {
    login: (username, password) => {
        return {
            "nickname": "mock user",
            "avatar": "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502204637.png",
            "gender": 0
        }
    }
}