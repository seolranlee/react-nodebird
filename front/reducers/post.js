// reducer중심으로 생각.
// 화면이 아니라 데이터를 먼저 구성.
import shortid from 'shortid'
import shortId from 'shortid'

export const initialState = {
  mainPosts: [{
    id: shortId.generate(),
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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
}

// 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data
})

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data
})

const dummyPost = (data) => ({
  // 겹치지 않는 랜덤한 아이디를 생성해서 return해주는 npm.
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'foo'
  },
  Images: [],
  Comments: []
})

const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'seolranlee'
  }
})
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        // dummyPost를 앞에다가 추가해줘야 새로운 게시글이 위에 올라간다.
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: true,
        addPostError: action.error
      }
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      }
    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId)
      const post = {...state.mainPosts[postIndex]}
      post.Comments =  [dummyComment(action.data.content), ...post.Comments]
      const mainPosts = [...state.mainPosts]
      mainPosts[postIndex] = post
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true
      }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: true,
        addCommentError: action.error
      }
    default:
      return state
  }
}

export default reducer