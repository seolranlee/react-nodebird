import { all, fork } from 'redux-saga/effects'

import postSaga from './post'
import userSaga from './user'

export default function* rootSaga() {
  // all을 1) 애들을 동시에 실행할 수 있게 해준다.
  yield all([
    // 1) fork나 call로 generator함수를 실행시켜준다
    fork(postSaga), // fork !== call 
    fork(userSaga)
  ])
}