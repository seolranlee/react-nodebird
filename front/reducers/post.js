// reducer중심으로 생각.
// 화면이 아니라 데이터를 먼저 구성.

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'seolranlee'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [
      {
        src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17467.webp?updated=1634792020109'
      },
      {
        src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17630.webp?updated=1635250994567'
      },
      {
        src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17303.webp?updated=1634553971673s'
      }
    ],
    Comments: [
      {
        User: {
          nickname: 'user1'
        },
        content: '코멘트1'
      },
      {
        User: {
          nickname: 'user2'
        },
        content: '코멘트2'
      }
    ]
  }],
  imagePaths: [],
  postAdded: false
}

// 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다
const ADD_POST = 'ADD_POST'

export const addPost = {
  type: ADD_POST
}

export const addPostAction = (data) => {
  console.log('data:', data)
  return {
    type: ADD_POST,
    data
  }
}

// const dummyPost = {
//   id: 2,
//   content: 'dummy data',
//   User: {
//     id: 1,
//     nickname: 'foo'
//   },
//   Images: [],
//   Comments: []
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        // dummyPost를 앞에다가 추가해줘야 새로운 게시글이 위에 올라간다.
        mainPosts: [{
          id: state.id + 1,
          content: action.data,
          ...state
        }, ...state.mainPosts],
        postAdded: true
      }
    default:
      return state
  }
}

export default reducer