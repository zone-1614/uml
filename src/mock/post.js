const Mock = require("mockjs");
export default {
    getPost: () => {
        return {
            res: posts
        };
    },
    postDetail: (id) => {
        const ret = posts.filter((post) => {
            return post.id === id;
        });
        return {
            res: ret
        };
    },
    createPost: (post) => {
        posts.push(post);
        // posts[0] = post;
    },
    getMyPosts: () => {
        return {
            res: myposts
        }
    }
};

var posts = [
    {
        id: 1,
        title: "芜湖~~",
        // user: {
        userid: 1,
        nickname: "mock user",
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502204637.png",
        gender: 0,
        like: 23,
        postNumber: 15,
        // },
        content: "哇哇哇哇哇哇哇哇哇哇哇哇阿萨大飒飒的阿萨大嗄是",
        createTime: "2022-4-1",
        tag: ["买东西", "C10"],
    },
    {
        id: 2,
        title: "战士输出高, 烈火刀刀爆",
        // user: {
        nickname: "成龙",
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202141.png",
        like: 21,
        postNumber: 6,
        // },
        createTime: "2022-3-31",
        content: "",
        tag: ["游戏"],
    },
    {
        id: 3,
        title: "出讲座票 * 10",
        // user: {
        nickname: "路人",
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png",
        like: 26,
        postNumber: 3,
        // },
        createTime: "2022-4-1",
        content: "asdasdsadasd",
        tag: ["交易", "讲座票"],
    },
    {
        id: 4,
        title: "组队偷C10外卖",
        // user: {
        nickname: "校长",
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202217.png",
        like: 8,
        postNumber: 1,
        // },
        createTime: "2022-4-1",
        content: "",
        tag: ["组队", "外卖", "C10"],
    },
    {
        id: 5,
        title: "出书",
        // user: {
        nickname: "院长",
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202244.png",
        like: 28,
        postNumber: 7,
        // },
        createTime: "2022-4-1",
        content: "出大一公共课的书",
    },
    {
        id: 6,
        title: "代拿快递, 外卖",
        // user: {
        nickname: "呵呵",
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202318.png",
        like: 5,
        postNumber: 2,
        // },
        createTime: "2022-3-1",
        content: "asdasdasdasd",
    },
];
var myposts = [
    {
        id: 20,
        title: "请问一下UML这门课要怎么学啊",
        time: "2022-3-31",
        content: "请问一下UML这门课要怎么学啊请问一下UML这门课要怎么学啊"
    },
    {
        id: 30,
        title: "收软件学院大三上的课本",
        time: "2022-4-1",
        content: "请问一下UML这门课要怎么学啊请问一下UML这门课要怎么学啊"
    },
    {
        id: 24,
        title: "出软件学院大二课本",
        time: "2022-3-31",
        content: "请问一下UML这门课要怎么学啊请问一下UML这门课要怎么学啊"
    },
    {
        id: 32,
        title: "出台灯",
        time: "2022-4-1",
        content: ""
    },
    {
        id: 83,
        title: "出讲座票 * 10",
        time: "2022-4-1",
        content: ""
    }
]