const Mock = require('mockjs')
export default {
    getPost: () => {
        return [
            {
                id: 1,
                title: "芜湖~~",
                user: {
                    id: 1,
                    nickname: "mock user",
                    avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/Snipaste_2022-03-29_15-05-56.png",
                    gender: 0
                },
                content: "哇哇哇哇哇哇哇哇哇哇哇哇阿萨大飒飒的阿萨大嗄是",
                createTime: "2022-4-1",
                tag: [
                    "买东西",
                    "C10"
                ]
            },
            {
                id: 2,
                title: "战士输出高, 烈火刀刀爆",
                user: {
                  nickname: "成龙",
                  id: 2,
                  gender: 0,
                  avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202141.png",
                },
                createTime: "2022-3-31",
                content: "",
                tag: [
                    "游戏"
                ]
              },
              {
                id: 3,
                title: "出讲座票 * 10",
                user: {
                  nickname: "路人",
                  id: 2,
                  gender: 0,
                  avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png",
                },
                createTime: "2022-4-1",
                content: "asdasdsadasd",
                tag: [
                    "交易",
                    "讲座票"
                ]
              },
              {
                id: 4,
                title: "组队偷C10外卖",
                user: {
                  nickname: "校长",
                  id: 2,
                  gender: 0,
                  avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202217.png",
                },
                createTime: "2022-4-1",
                content: "",
                tag: [
                    "组队",
                    "外卖",
                    "C10"
                ]
              },
              {
                id: 5,
                title: "出书",
                user: {
                  nickname: "院长",
                  id: 2,
                  gender: 0,
                  avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202244.png",
                },
                createTime: "2022-4-1",
                content: "出大一公共课的书",
              },
              {
                id: 6,
                title: "代拿快递, 外卖",
                user: {
                  nickname: "呵呵",
                  id: 2,
                  gender: 0,
                  avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202318.png",
                },
                createTime: "2022-3-1",
                content: "asdasdasdasd",
              }
        ]
    }
}