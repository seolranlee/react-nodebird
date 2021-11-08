import produce from 'immer'

export const initialState = {
  logInLoading: false, // 로그인 시도중  // 로딩창 UI구현을 위함
  logInDone: false,
  logInError: false,

  logOutLoading: false, // 로그아웃 시도중  // 로딩창 UI구현을 위함
  logOutDone: false,
  logOutError: false,

  signUpLoading: false, // 회원가입 시도중  // 로딩창 UI구현을 위함
  signUpDone: false,
  signUpError: false,

  changeNicknameLoading: false, // 닉네임 변경 시도중  // 로딩창 UI구현을 위함
  changeNicknameDone: false,
  changeNicknameError: false,
  
  me: null,
  signUpData: {},
  loginData: {}
}

// 변수는 에디터가 관리해주기 때문에 오타가 날 확률이 줄어든다.
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const CHANGE_NICKNAME_UP_REQUEST = 'CHANGE_NICKNAME_UP_REQUEST'
export const CHANGE_NICKNAME_UP_SUCCESS = 'CHANGE_NICKNAME_UP_SUCCESS'
export const CHANGE_NICKNAME_UP_FAILURE = 'CHANGE_NICKNAME_UP_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'

// 내 게시글이 추가되는 액션
// post 데이터가 변경(추가/삭제)될 때 user 데이터(Posts 배열)도 변경이 필요하다. => post saga에서 액션이 들어오는 걸 감지할 수 있다.
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'


// data관련된건 reducer에서
 const dummyUser = (data) => ({ 
   ...data, 
   nickname: 'seolranlee',
   id: 1,
   Posts: [{ id: 1 } ],
   Followings: [{ nickname: 'yeonju' }, { nickname: 'foo' }, { nickname: 'bar' }],
   Followers: [{ nickname: 'yeonju' }, { nickname: 'foo' }, { nickname: 'bar' }]
  })
// 그때 그때 액션을 만드는 action creater
export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data
  }
}

export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST'
  }
}

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true
        draft.logInError = null
        draft.logInDone = false
        break
      case LOG_IN_SUCCESS:
        draft.logInLoading = false
        draft.logInDone = true
        draft.me = dummyUser(action.data)
        break
      case LOG_IN_FAILURE:
        draft.logInLoading = false
        draft.logInError = action.error
        break
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true
        draft.logOutDone = false
        draft.logOutError = null
        break
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false
        draft.logOutDone = true
        draft.me = null
        break
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false
        draft.logOutError = action.error
        break
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true
        draft.signUpDone = false
        draft.signUpError = null
        break
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false
        draft.signUpDone = true
        break
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false
        draft.signUpError = action.error
        break
      case CHANGE_NICKNAME_UP_REQUEST:
        draft.changeNicknameLoading = true
        draft.changeNicknameDone = false
        draft.changeNicknameError = null
        break
      case CHANGE_NICKNAME_UP_SUCCESS:
        draft.changeNicknameLoading = false
        draft.changeNicknameDone = true
        break
      case CHANGE_NICKNAME_UP_FAILURE:
        draft.changeNicknameLoading = false
        draft.changeNicknameError = action.error
        break
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data })
        break
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: [{ id: action.data }, ...state.me.Posts]
        //   }
        // }
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id === action.data)
        break
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: state.me.Posts.filter((v) => v.id === action.data)
        //   }
        // }
      default:
        break
    }
  })
  
}

export default reducer