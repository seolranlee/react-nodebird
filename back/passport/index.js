// passport 설정 파일
const passport = require('passport')
const local = require('./local')
const { User } = require('../models')

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 유저 정보 중 클라이언트 쿠키랑 묶어줄 user.id만 저장한다. (모든 유저 정보를 서버 세션에 다 저장하게 되면 서버의 메모리 부담이 심해짐)
    done(null, user.id)
  })

  // id를 통해 db에서 User정보 복구
  passport.deserializeUser(async (id, done) => {
    // async가 있으면 항상 try catch문으로 감싼다. (error가 나는 상황에 대비)
    try {
      const user = await User.findOne({ where: { id }})
      done(null, user)
    } catch(error) {
      console.error(error)
      done(error)
    }

  })

  local()
}