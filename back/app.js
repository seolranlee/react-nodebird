// node는 서버가 아니다.
// node가 제공해주는 http 모듈이 서버의 역할을 해주는 것(node가 해주는게 아니다)
// node는 import, export default 쓰지 않는다.
// require, module.exports
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const dotenv = require('dotenv')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const db = require('./models')
const passport = require('passport')
const passportConfig = require('./passport')

dotenv.config()
const app = express()
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공')
  })
  .catch(console.error)
passportConfig()

// use() 미들웨어. 라우터보다 위에 올려줘야한다. 순서가 매우 중요.
app.use(cors({
  origin: true,  // 보낸 곳의 주소가 자동으로 들어간다.
  // credentials: false
})) // 보안상 위험.
// 프론트에서 보낸 data를 req.body에 넣어주는 역할
// 프론트에서 json형태로 보낼 때
app.use(express.json())
// 프론트에서 form submit할 때
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  saveUninitialized: false,
  resave: false,
  // 쿠키에 보낼 랜덤한 문자열을 만드는 시크릿 키(이 키를 알면 랜덤한 문자열을 보고 복원 가능)
  secret: process.env.COOKIE_SECRET
}))
app.use(passport.initialize())
app.use(passport.session())
// app.get: 가져오다
// app.post: 생성하다
// app.put: 전체수정
// app.delete: 제거
// app.patch: 부분수정
// app.options: 찔러보기(나 요청보낼 수 있어..?)
// app.head: 헤더만 가져오기(헤더/바디)
app.get('/', (req, res) => {
  res.send('hello express')
})

app.get('/', (req, res) => {
  res.send('hello api')
})

app.get('/post', (req, res) => {
  // data는 보통 json으로 표현한다.
  // 실제로 api들은 json을 응답한다.
  res.json([
    { id: 1, content: 'hello1' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ])
})

// 중복되는 url(/post)을 앞으로 뽑아줌.
app.use('/post', postRouter)
app.use('/user', userRouter)

// 에러처리 미들웨어는 기본적으로 있지만 하기 처럼 직접 만들 수도 있음. 매게변수 4개.
// app.use((err, req, res, next) => {

// })

app.listen(3065, () => {
  console.log('서버 실행 중~!')
})