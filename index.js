const express = require('express')
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const { User } = require('./models/User')
const bodyParser = require('body-parser')

const config = require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extend:true}));

// application/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI).then(() => console.log('MonogoDB Connect'))
  .catch(err => console.log('Connect error : '+ err))

app.get('/', (req,res) => {
    res.send('dddfaf')
})

app.post('/register', (req,res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다

    // request 에서 넘어온 body의 내용을 user 변수에 저장
    const user = new User(req.body)

    // save는 몽구스 내장 함수
    user.save( (err, userInfo) => {
      if(err) {
        return res.json({success : false, message : err})
      }
      return res.status(200).json({
        success : true
      })
    })
})

app.listen(port, () => console.log(`start port ${port}`))
