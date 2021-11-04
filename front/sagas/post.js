import { all, fork, call, put, takeLatest, delay } from "@redux-saga/core/effects";
import axios from 'axios'

// addPost
function addPostAPI(data) {
  return axios.post('/api/post', data)
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000)
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

function* watchAddPosts() {
  yield takeLatest('ADD_POST_REQUEST', addPost)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPosts)
  ])
}