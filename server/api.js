const jwt = require("jsonwebtoken");
const fs = require("fs");
const http = require("http");
const Mock =require('mockjs')
const querystring = require("querystring");
const _ = require('lodash')
const multer = require('multer')
// console.log(multer)
var storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, req.originalname.split('.')[0] + '-' + Date.now() + '.' + req.originalname.split('.')[1])
  }
})
var upload = multer({storage: storage})

const queryApi = (url,methods,params)=>{
  return new Promise((resolve,reject)=>{
    let data = "";
    const options = {
      hostname: "www.lb717.com",
      post: 80,
      path: url,
      method: methods,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    }

    let request = http.request(options, response => {
      response.setEncoding("utf8");
      response.on("data", chunk => {
        data += chunk;
      });
      response.on("end", () => {
        resolve(JSON.stringify(data));
      });
    });
    if(methods.toLowerCase()==='post'){
      request.write(querystring.stringify(params));
    }
    request.end();
  })
}

/* function VerifyToken(){
  return new Promise((reslove, reject) => {
    jwt.verify(token, 1511, (err, decoded) => {
      if(err) {
        reject(err)
      } else {
        reslove(decoded)
      }
    })
  })
} */

// 封装读取文件返回json数据方法
const readFileSyncFn = (file)=>{
  return JSON.parse(fs.readFileSync(__dirname + file, {
      encoding: "utf-8"
    }));
}

// }
module.exports=(app)=>{
  // 注册的接口
  app.post('/user/register',(req,res) => {
    user = readFileSyncFn("/user.json")
    user.push(req.body)
    fs.writeFile(
      __dirname + '/user.json',
      JSON.stringify(user),
      ()=>{
        res.end(JSON.stringify({
          "success": 1,
          "info": 'register success'
        }))
      }
    )
  })

  // login api
  app.post('/dsp-admin/user/login',(req,res)=>{
    user = readFileSyncFn("/user.json")
    let login = req.body
    console.log(login)
    let resInfo = {
      data: 'login fffff',
      msg: '登录信息有错',
      status: 1
    }
    console.log(user)
    user.forEach(usr=>{
      if(usr.username === login.username && usr.password === login.password){
        resInfo.success =0;
        resInfo.info='login success',
        resInfo.user={
          name:usr.username,
          time:new Date().toLocaleTimeString(),
          nickName:'Senf'
        }
      }
    })
    if(resInfo.success === 0){
      resInfo.token = jwt.sign(login,"1511",{
        expiresIn: 60*60
      })
    }
    res.end(JSON.stringify(resInfo))
  })

  app.post('/dsp-report/index', (req, res) => {
    let {startTime, endTime, dimLeft, dimRight} = req.body
    let mockData = Mock.mock({
      "status": 0,
      "data": {
        exposteNum: 10000,
        clickNum: 100,
        clickRate: 1000,
        clickPrice: 10000,
        cmpPrice: 200000,
        consumed: 100,
        "dataY1|5": () => Mock.Random.natural(1,9999),
        dataY2: [1000, 1234, 1678, 1789,1890]
      }
    })
    res.send(mockData)
  })

  app.post('dsp-creative/creative/upload', upload.single('file'), (req, res) => {
    res.send({
      "data": {
        "size": 2000,
        "value": "",
        "key": "2A36B67C6"
      },
      "status": 0
    })
  })

}