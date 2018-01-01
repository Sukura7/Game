
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://localhost:27017/games');

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error)
});

db.connection.on("open", function () {
    console.log("数据库连接成功")
});

// const id = `session_${Math.floor((Math.random() * 100000))}`;

const SessionSchema =new Schema({
  _id: String,
  name: String,
  classNo: String,
  grade: String,
  sno: String,
  level: Number,
  score: String,
  totalScore: Number,
  mode: String,
  count: Number,
  last_modify: Number,
  session_id: {
    type: String,
    unique: true
  },
})

//次

exports.Session = mongoose.model('session', SessionSchema)