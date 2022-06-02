const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxLength : 50
    },
    email : {
        type : String,
        trim : true, //여백 없애준다
        unique : 1
    },
    password : { 
        type : String,
        minlength: 5
    },
    lastname : {
        type : String,
        maxLength  : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    toeknExp : {
        type : Number
    }

})

// Schema를 Model로 감싸는 작업
const User = mongoose.model('User', userSchema)

// 다른곳에서도 해당 모델을 사용 할 수 있도록 처리
module.exports = {User}