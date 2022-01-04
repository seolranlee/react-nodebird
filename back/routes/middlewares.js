exports.isLoggedIn = (req, res, next) => {
  // req.isAuthenticated(): passport에서 로그인 여부를 제공해줌.
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).send('로그인이 필요합니다. ')
  }
}

exports.isNotLoggedIn = (req, res, next) => {
  // req.isAuthenticated(): passport에서 로그인 여부를 제공해줌.
  if (!req.isAuthenticated()) {
    // next에 인자가 아무것도 없으면 다음 미들 웨어로 간다. 미들웨어: (req, res, next) => {} 함수.
    next()
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.')
  }
}