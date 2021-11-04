export const initialState = {
  isLoggingIn: false, // 로그인 시도중  // 로딩창 UI구현을 위함
  isLoggedIn: false,
  isLoggingOut: false,  // 로그아웃 시도중  // 로딩창 UI구현을 위함
  me: null,
  signUpData: {},
  loginData: {}
}
 
// 그때 그때 액션을 만드는 action creater
export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data
  }
}

export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST'
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      console.log('reducer login')
      return {
        ...state,
        isLoggingIn: true,
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'seolranlee' }
      }
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false
      }
    case 'LOG_OUT_REQUEST':
      console.log('reducer loginOut')
      return {
        ...state,
        isLoggingOut: true,
      }
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null
      }
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default reducer