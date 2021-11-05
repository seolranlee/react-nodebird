import { all, fork, call, put, takeLatest, delay } from "@redux-saga/core/effects";
import axios from 'axios'
import { 
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, 
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import shortId from 'shortid'

// addPost
function addPostAPI(data) {
  return axios.post('/api/post', data)
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000)
    // 겹치지 않는 랜덤한 아이디를 생성해서 return해주는 npm.
    const id = shortId.generate()
    // post reducer 상태 변경
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data
      }
    })
    // ADD_POST_SUCCESS 후 
    // saga는 동시에 여러 액션을 dispatch할 수 있다.
    // user reducer 상태 변경
    yield put({
      type: ADD_POST_TO_ME,
      data: id
    })
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data
    })
  }
}

// removePost
function removePostAPI(data) {
  return axios.delete('/api/post', data)
}

function* removePost(action) {
  try {
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000)
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data
    })
    // ADD_POST_SUCCESS 후 
    // saga는 동시에 여러 액션을 dispatch할 수 있다.
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data
    })
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
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

function* watchRemovePosts() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPosts),
    fork(watchRemovePosts),
    fork(watchAddComment)
  ])
}