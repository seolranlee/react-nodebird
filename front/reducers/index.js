import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

// user, post reducer들을 불러온다
import user from './user';
import post from './post';

// reducer: (이전상태, 액션) => return 다음상태
// combineReducers로 reducer들을 합친다. // reducer들은 함수니까 함수를 합치는 과정.
const rootReducer = combineReducers({
  // SSR을 위한 HYDRATE를 위해 추가한 index reducer 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDATE:', HYDRATE);
        return { ...state, ...action.payload };
      // 최초 초기화 시점을 위한 코드
      default:
        return state;
    }
  },
  // user와 post의 initialState는 combineReducers가 알아서 합쳐준다.
  user,
  post,
});

export default rootReducer;
