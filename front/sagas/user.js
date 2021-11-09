import { all, fork, call, put, takeLatest, delay } from "@redux-saga/core/effects";
import axios from 'axios'
import { 
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, 
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, 
  FOLLOW_REQUEST, UNFOLLOW_REQUEST, FOLLOW_SUCCESS, 
  FOLLOW_FAILURE, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE
} from '../reducers/user'

// 서버에 요청하는 함수는 일반 함수!!!
// login
function loginAPI(data) {
  return axios.post('/api/login', data)
}

function* logIn(action) {
  try {
    console.log('saga login')
    // call: 동기 함수 호출: 결과값을 기다리고 다음 줄로 넘어간다. await이랑 비슷하다고 생각
    // fork: 비동기 함수 호출(non-blocking): 결과값을 기다리지 않고 다음 줄로 넘어간다.
    // const result = yield call(loginAPI, action.data) // call을 써야 한다!!

    yield delay(1000) // 서버 구현 전까지 비동기적인 효과를 위해
    // effect앞에는 항상 yield를 붙인다.
    // put은 dispatch.
    yield put(
      // action 객체
      {
        type: LOG_IN_SUCCESS,
        data: action.data
      }
    )
    // const result = yield fork(loginAPI)
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data
    })
  }
}

function followAPI() {
  return axios.post('/api/follow')
}

function* follow(action) {
  try {
    // const result = yield call(followAPI)
    yield delay(1000)
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data
    })
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data
    })
  }
}


function unfollowAPI() {
  return axios.post('/api/unfollow')
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI)
    yield delay(1000)
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data
    })
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data
    })
  }
}


function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow)
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow)
}

function* watchLogin() {
  // 'LOGIN'이라는 액션이 들어오면 logIn generator 함수를 실행한다.
  // eventListner와 유사한 느낌
  // yield take의 치명적인 단점: 1회용임. 한번 로그인 후에는 사라진다. 해결하는 방법? => generator 무한
  // yield take('LOG_IN_REQUEST', logIn)
  
  // while (true) {  // while로 감싸면 무한하게 실행된다.
  //   yield take('LOG_IN_REQUEST', logIn)
  // }
  
  // while take는 동기적으로 동작하지만 takeEvery는 비동기적으로 동작
  // yield takeEvery('LOG_IN_REQUEST', logIn)

  // takeLatest: 사용자가 오동작으로 2회 이상 눌렀을 때, takeEvery는 2회 모두 실행된다면 takeLatest는 앞의 오동작은 무시되고 마지막 것만 동작. 보통은 takeLatest를 많이 해둔다.
  // 치명적 단점: 응답을 취소하지 서버에 보내는 요청을 취소하진 못함 => 보통 서버쪽에서 검증하는 편. 그래서 보통 클라이언트에서는 takeLatest를 주로 쓴다.
  yield takeLatest(LOG_IN_REQUEST, logIn)

  // 2초동안에 로그인은 한번만 요청
  // yield throttle('LOG_IN_REQUEST', logIn, 2000)

}

// logout
function logoutAPI() {
  return axios.post('/api/logout')
}

function* logOut() {
  try {
    // const result = yield call(logoutAPI)
    yield delay(1000)
    yield put({
      type: LOG_OUT_SUCCESS,
    })
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data
    })
  }
}


// signUp
function signUpAPI() {
  return axios.post('/api/signUp')
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI)
    yield delay(1000)
    yield put({
      type: SIGN_UP_SUCCESS,
    })
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data
    })
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
  ])
}