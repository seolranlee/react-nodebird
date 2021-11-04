import { all, fork, call, put, takeLatest, delay } from "@redux-saga/core/effects";
import axios from 'axios'
import { 
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE 
} from "../reducers/post";

// addPost
function addPostAPI(data) {
  return axios.post('/api/post', data)
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000)
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data
    })
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data
    })
  }
}

// addComment
function addCommentAPI(data) {
  return axios.Comment('/api/post/${data.postId}/comment', data)
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data)
    yield delay(1000)
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data
    })
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data
    })
  }
}

function* watchAddPosts() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPosts),
    fork(watchAddComment)
  ])
}