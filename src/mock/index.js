const Mock = require('mockjs')
import user from './user'
import post from "./post"
import carousels from "./carousels"

Mock.setup({
    timeout: '300-600'
})
var baseURL = "http://localhost:8080/api/"
//Mock.mock(baseURL + 'user/login', 'post', user.login)
Mock.mock(baseURL + 'posts', 'get', post.getPost)
Mock.mock(baseURL + 'carousels', 'get', carousels.getCarousels)
