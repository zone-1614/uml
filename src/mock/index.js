const Mock = require('mockjs')
import user from './user'
import post from "./post"
import carousels from "./carousels"

Mock.setup({
    timeout: '300-600'
})
var baseURL = "http://localhost:8080/api/"
Mock.mock(baseURL + 'user/login', 'post', user.login)
Mock.mock(baseURL + 'posts', 'get', post.getPost)
Mock.mock(baseURL + 'carousels', 'get', carousels.getCarousels)
// let configArray = [];

// // 使用webpack的require.context()遍历所有mock文件
// const files = require.context('.', true, /\.js$/);
// files.keys().forEach((key) => {
//   if (key === './index.js') return;
//   configArray = configArray.concat(files(key).default);
// });

// // 注册所有的mock服务
// configArray.forEach((item) => {
//   for (let [path, target] of Object.entries(item)) {
//     let protocol = path.split('|');
//     Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
//   }
// });