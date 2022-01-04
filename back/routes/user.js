const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
// db.User
const { User, Post } = require('../models')
const router = express.Router()
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
// 애매한 동작은 대부분 POST 이다.
// 미들웨어를 확장하는 방법(req, res, next)를 쓸 수 있게: express의 기법이다.
// isLoggedIn: 미들웨어를 중간에 껴줌. 로그인을 하지 않은 사람들만 로그인 시도를 할 수 있게.
router.post('/login', isNotLoggedIn, (req, res, next) => {
  // passport 전략 실행
  passport.authenticate('local', (err, user, info) => {
    // 서버에러
    if (err) {
      console.error(err)
      return next(err)
    }
    // 클라이언트 에러
    if (info) {
      return res.status(401).send(info.reason)
    }

    // 우리 서비스 로그인 성공시
    // 우리 서비스 로그인이 아니라 passport login
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.err(loginErr)
        return next(loginErr)
      }
      // 사용자 정보를 프론트로 전송.
      // 이때 내부적으로 res.setHeader('Cookie', 'cxlhy')
      // 프론트는 보안에 취약한 정보(user 정보. 아이디, 비밀번호, 등등)를 들고 있는 대신 랜덤한 문자열(cxlhy)만 쿠키로 들고 있느낟.
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // 비밀번호 제외
        attributes: {
          exclude: ['password']
        },
        // 다른 테이블과의 관계를 합쳐서 보내줌
        include: [{
          model: Post
        }, {
          model: User,
          as: 'Followings',
        }, {
          model: User,
          as: 'Followers',
        }]
      })
      return res.status(200).json(fullUserWithoutPassword)
    })
  })(req, res, next)
})  // PSOT /user/login

router.post('/', isNotLoggedIn, async (req, res, next) => {  // POST /user/'
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (exUser) {
      // 요청/응답은 헤더(상태, 용량, 시간, 쿠키)와 바디(데이터)로 구성되어 있다.
      // 200 성공
      // 300 리다이렉트
      // 400 클라이언트 에러
      // 500 서버 에러
      // '이미 사용중인 아이디 입니다': 프론트의 erro.response.data가 된다.
      return res.status(403).send('이미 사용중인 아이디 입니다.')
    }
    // bcrypt()도 비동기라 await이 필요하다
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    // req.body => 클라이언트가 보낸 data
    // User.create()가 비동기 함수이기 때문에 res.send('ok')이 먼저 실행되지 않게 하기 위해 await을 써야한다.
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword
    })
    // 차단은 브라우저가 차단. 허용은 서버가 허용.
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060')
    // 성공적으로 *작성됨*
    res.status(201).send('ok')
  } catch(error) {
    console.log(error)
    // next를 통해서 에러를 보내면 그 에러들이 한번에 처리된다.
    next(error) // status 500
  }
  
})

router.post('/logout', isLoggedIn, (req, res, next) => {
  req.logOut()
  req.session.destroy()
  res.send('ok')
})


module.exports = router