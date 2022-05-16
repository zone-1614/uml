import axios from "axios";
import qs from "qs";

const post = {
    createPost: () => {

    },
    getPostDetailByPostId: (id) => {
        return axios.get(
            `post/id/${id}`,
            { id }
        )
    },
    // 主页的post
    getPosts: () => {
        return axios.get(
            "post/posts/10"
        )
    },
};

export default post;
