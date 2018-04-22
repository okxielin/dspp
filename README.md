# dspproduct

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 项目总结思路

```
1、整体技术选型(包括脚手架和框架、ES6、ES5)
        选用的是vue的脚手架，echarts，element-ui ，moment，vuex，使用ES6的语法，因为es6有箭头函数、块级作用域的let和const、模块化等这些特点
        vue:轻量级的框架，数据能双向绑定，指令化，组件化，
        与react 的区别:react是虚拟DOM，会对渲染出来的DOM进行脏检查，vue是使用DOM模板，并且在摸板中提供了指令，过滤器

2、路由搭建、路由挂载的实现权限接口设计
        每一个路由对应一个组件
        import home from './../views/home/home.vue'
        let routes = [
            {
                path: '/',
                redirect: '/home'
            },
            {
                path: '/home',
                name: 'home',
                component: home
            }
        ]
        export default reoutes
        路由挂载：例如：像这样 import VueRouter from 'vue-router' Vue.use(VueRouter)
        接口：用node搭建一个简单的静态服务器，准备一定的模拟接口，有接口时连接真实接口，express 是一个基于Node.js 平台的极简、灵活的web应用开发框架和丰富的http工具

3、数据请求以及如何封装、全局请求接口
        数据：先是使用mockjs自行模拟,或者是后台给
        利用了express因为有丰富的http工具，可以设置中间件来响应 HTTP 请求，定义了路由表用于执行不同的 HTTP 请求动作，可以通过向模板传递参数来动态渲染 HTML 页面。
        例如: app.post('dsp-creative/creative', (req, res) => {})
              action="https://localhost:8080/dsp-creative/
        因为是使用了element-ui，所以很多组件是封装好的

4、项目中的核心功能和难点的功能介绍
        页面：登录页、=>登录成功 =>跳转首页
                     =>登录失败 =>重新登录
                     =>注册

             首页、=> 首页内容
                   =>超级管理员
                   =>普通管理员

             广告管理、=>广告单元
                      =>广告管理
                      =>广告创意

             工具箱、  =>账号管理 =>列表
                                 =>新增
                      =>客户管理

             数据管理、=>新建客户
            
            关于登录页：
                1.前端收集用户名，密码，传给后台(有可能还需要发送验证码，验证一下)
                2.后台在数据库中查找前端传来的信息，如果存在就可以继续可以跳转首页，否则返回错误信息，重新登录或者去注册账号
                3.如果去注册的话
                    (1).前端收集用户名，密码，传给后台
                    (2).后端将数据存到指定数据库中
                    (3).返回一个成功的信息
            
            关于首页：
                1.超级管理员
                    可以去新建账号，管理其他账号
                2.普通管理员
                    只可以管理自己的账号，不可以修改其他账号
            
            关于广告管理页：
                1.广告单元
                    (1).可以新建单元，批量修改单元
                2.广告管理
                    (2).可以新建计划，批量修改计划
                3.广告创意
                    (3).可以新建创意，批量修改创意，提供各种素材

5、数据管理(如何管理、如何维护)
        后台管理

6、遇到困难以及解决方式(自定义组件)
        日期

7、打包上线
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
