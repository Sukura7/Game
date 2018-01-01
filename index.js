const express = require('express')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
var routes = require('./routes/index')
const app = express()

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// 配置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 配置bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 路由
app.use('/', routes);

const server = app.listen(8857, function () {
    console.log('app listening at http:localhost:8857')
})