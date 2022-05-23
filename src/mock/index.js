const Mock = require('mockjs')
import user from './user'
import post from "./post"
import carousels from "./carousels"

Mock.setup({
    timeout: '300-3000'
})
var baseURL = "http://localhost:8080/api/"
Mock.mock(baseURL + 'user/login', 'post', user.login)
Mock.mock(baseURL + 'post/posts/10', 'get', post.getPost)
Mock.mock(baseURL + 'post/carousels', 'get', carousels.getCarousels)
Mock.mock(baseURL + 'post/1', 'get', post.postDetail)
Mock.mock(baseURL + 'post/create', 'post', post.createPost)