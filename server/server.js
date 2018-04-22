const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const api = require('./api')

const app = express()

app.use(bodyParser.json())
app.use(express.static('./'))

// token 验证
function VerifyToken(){
  return new Promise((reslove, reject) => {
    jwt.verify(token, "1511", (err, decoded) => {
      if(err) {
        reject(err)
      } else {
        reslove(decoded)
      }
    })
  })
}

// 设置跨域 cors
app.all('*',(req,res,next) => {
  res.header('Access-Control-Allow-Origin','http://localhost:8080')
  res.header("Access-Control-Allow-Headers","Content-Type,Token,plantfrom");
  res.header("Content-Type", "application/json;charset=utf-8");

  VerifyToken(req.headers.token).then(res => {
    console.log(res)
  })

  next()
})
// 启动接口
api(app)

app.listen(9000,() => {
  console.log('server listen 9000')
})