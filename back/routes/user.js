const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')
// db.User
const { User, Post } = require('../models')
const router = express.Router()
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

router.get('/', async (req, res, next) => { // GET /user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        // 비밀번호 제외
        attributes: {
          exclude: ['password']
        },
        // 다른 테이블과의 관계를 합쳐서 보내줌
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword)
    } else {
      res.status(200).json(null)
    }
  } catch(error) {
    console.error(error)
    next(error)
  }
})
// 애매한 동작은 대부분 POS  T 이다.
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
          model: Post,
          // data 효율을 위하여 id만 가져온다=>id만 가져와도 length는 셀 수 있으니까.
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
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

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    // 수정: update
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    })
    res.status(200).json({ nickname: req.body.nickname })
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('존재하지 않는 유저는 팔로우 할 수 없습니다.')
    }
    await user.addFollowers(req.user.id)
    // action.data가 되는 부분: { UserId: parseInt(req.params.userId, 10) }
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('존재하지 않는 유저는 언팔로우 할 수 없습니다.')
    }
    await user.removeFollowers(req.user.id)
    // action.data가 되는 부분: { UserId: parseInt(req.params.userId, 10) }
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /user/follower/1
  try {
    const user = await User.findOne({ where: { id: req.params.userId }})
    if (!user) {
      res.status(403).send('존재하지 않는 유저는 차단 할 수 없습니다.')
    }
    // 차단하려는 사람이 나를 언팔로우 하게
    await user.removeFollowing(req.user.id)
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
  try {
    const user = await User.findOne({ where: { id: req.user.id }})
    if (!user) {
      res.status(403).send('존재하지 않는 유저입니다.')
    }
    const followers = await user.getFollowers()
    res.status(200).json(followers)
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
  try {
    const user = await User.findOne({ where: { id: req.user.id }})
    if (!user) {
      res.status(403).send('존재하지 않는 유저입니다.')
    }
    const followings = await user.getFollowings()
    res.status(200).json(followings)
  } catch(error) {
    console.error(error)
    next(error)
  }
})

module.exports = router