import { all, fork, call, put, take } from 'redux-saga/effects'
import axios from 'axios'

// 서버에 요청하는 함수는 일반 함수!!!
// login
function loginAPI(data) {
  return axios.post('/api/login', data)
}

function* logIn(action) {
  try {
    // call: 동기 함수 호출: 결과값을 기다리고 다음 줄로 넘어간다. await이랑 비슷하다고 생각
    // fork: 비동기 함수 호출(non-blocking): 결과값을 기다리지 않고 다음 줄로 넘어간다.
    const result = yield call(loginAPI, action.data) // call을 써야 한다!!
    // effect앞에는 항상 yield를 붙인다.
    // put은 dispatch.
    yield put(
      // action 객체
      {
        type: 'LOG_IN_SUCCESS',
        data: result.data
      }
    )
    // const result = yield fork(loginAPI)
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data
    })
  }
}

// logout
function logoutAPI() {
  return axios.post('/api/logout')
}

function* logOut() {
  try {
    const result = yield call(logoutAPI)
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data
    })
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data
    })
  }
}

// addPost
function addPostAPI(data) {
  return axios.post('/api/post', data)
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data)
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data
    })
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data
    })
  }
}

function* watchLogin() {
  // 'LOGIN'이라는 액션이 들어오면 logIn generator 함수를 실행한다.
  // eventListner와 유사한 느낌
  yield take('LOG_IN_REQUEST', logIn)
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut)
}

function* watchAddPosts() {
  yield take('ADD_POST_REQUEST', addPost)
}

export default function* rootSaga() {
  // all을 1) 애들을 동시에 실행할 수 있게 해준다.
  yield all([
    // 1) fork나 call로 generator함수를 실행시켜준다
    fork(watchLogin), // fork !== call 
    fork(watchLogOut),
    fork(watchAddPosts),
  ])
}