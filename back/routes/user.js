const express = require('express')
const bcrypt = require('bcrypt')
// db.User
const { User } = require('../models')
const router = express.Router()

router.post('/', async (req, res, next) => {  // POST /user/'
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

module.exports = router