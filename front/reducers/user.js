export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data
      }
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null
      }
    default:
      return state
  }
}

export default reducer