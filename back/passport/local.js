// local 로그인 전략
const passport = require('passport')
// 구조 분해 할당을 쓸 때 이름을 바꾸는 문법
const { Strategy: LocalStrategy } = require('passport-local')
const bcrypt = require('bcrypt')
const { User } = require('../models')

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email', // req.body.email
    passwordField: 'password' // req.body.password
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({
        where: { email }
      })
      // 사용자가 존재하지 않으면
      if (!user) {
        // done(서버에러, 성공, 클라이언트 에러)
        // done은 passport.authenticate에 전달되는 콜백같은 것.
        return done(null, false, { reason: '존재하지 않는 이메일입니다!' })
      }
      const result = await bcrypt.compare(password, user.password)
      if (result) {
        // 성공=>사용자 정보 넘겨준다.
        return done(null, user)
      }
      return done(null, false, { reason: '비밀번호가 틀렸습니다.' })
    } catch (error) {
      // 서버 에러는 이쪽에서.
      console.error(error)
      return done(error)
    }
  }))
}