import Mock from 'mockjs'

export default {
    login: (username, password) => {
        return {
            res: {
                user
            }
        }
    }
}

const user = {
    nickname: "mock user",
    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png",
    gender: 0,
}