import { HYDRATE } from "next-redux-wrapper"

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: []
  }
}

// 그때 그때 액션을 만드는 action creater
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  }
}

export const logoutAction = () => {
  return {
    type: 'LOG_OUT'
  }
}

// (이전상태, 액션) => return 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDATE:', HYDRATE)
      return { ...state, ...action.payload }
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data
        }
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null
        }
      }
    // 최초 초기화 시점을 위한 코드
    default:
      return state
  }
}

export default rootReducer