const Mock = require("mockjs");
export default {
    getPost: () => {
        return {
            res: posts
        };
    },
    postDetail: (id) => {
        const ret = posts.find((post) => {
            return post.id == id;
        });
        return {
            res: ret
        };
    },
    createPost: (post) => {
        posts.push(post);
    },
    getMyPosts: () => {
        return {
            res: myposts
        }
    },
    getPostDetailByPostId(id) {
        console.log(id);
        const post = posts.filter((p) => {
            return p.id == id;
        })
        const commentsForPost = comments.filter((c) => {
            return c.postId == post.id;
        })
        return {
            res: {
                post, commentsForPost
            }
        }
    }
};

var posts = [
    {
        id: 1,
        title: Mock.Random.csentence(),
        // user: {
        userid: 1,
        nickname: Mock.Random.cname(),
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502204637.png",
        gender: 0,
        like: 23,
        postNumber: 15,
        // },
        content: Mock.Random.csentence(),
        createTime: Mock.Random.date(),
        tag: ["买东西", "C10"],
    },
    {
        id: 2,
        title: Mock.Random.csentence(),
        // user: {
        nickname: Mock.Random.cname(),
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202141.png",
        like: 21,
        postNumber: 6,
        // },
        createTime: Mock.Random.date(),
        content: Mock.Random.csentence(),
        tag: ["游戏"],
    },
    {
        id: 3,
        title: Mock.Random.csentence(),
        // user: {
        nickname: Mock.Random.cname(),
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202202.png",
        like: 26,
        postNumber: 3,
        // },
        createTime: Mock.Random.date(),
        content: Mock.Random.csentence(),
        tag: ["交易", "讲座票"],
    },
    {
        id: 4,
        title: Mock.Random.csentence(),
        // user: {
        nickname: Mock.Random.cname(),
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202217.png",
        like: 8,
        postNumber: 1,
        // },
        createTime: Mock.Random.date(),
        content: "",
        tag: ["组队", "外卖", "C10"],
    },
    {
        id: 5,
        title: Mock.Random.csentence(),
        // user: {
        nickname: Mock.Random.cname(),
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202244.png",
        like: 28,
        postNumber: 7,
        // },
        createTime: Mock.Random.date(),
        content: Mock.Random.csentence(),
    },
    {
        id: 6,
        title: Mock.Random.csentence(),
        // user: {
        nickname: Mock.Random.cname(),
        userid: 2,
        gender: 0,
        avatar: "https://raw.githubusercontent.com/zone-1614/pic/main/img/20220502202318.png",
        like: 5,
        postNumber: 2,
        // },
        createTime: Mock.Random.date(),
        content: Mock.Random.csentence(),
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
];

var comments = [
    {
        postId: 1,
        userId: 1,
        nickname: "路人",
        content: "说得对",
    },
    {
        postId: 1,
        userId: 2,
        nickname: "abcde",
        content: "正确的",
    },
    {
        postId: 1,
        userId: 3,
        nickname: "^_^",
        content: "客观的",
    },
    {
        postId: 1,
        userId: 4,
        nickname: "yyd",
        content: "明智的",
    },
    {
        postId: 1,
        userId: 5,
        nickname: "jkl",
        content: "说得对",
    }
];
