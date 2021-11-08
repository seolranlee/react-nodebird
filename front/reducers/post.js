import shortId from 'shortid'
import produce from 'immer'
// reducer중심으로 생각.
// 화면이 아니라 데이터를 먼저 구성.

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
        id: shortId.generate(),
        src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17467.webp?updated=1634792020109'
      },
      {
        id: shortId.generate(),
        src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17630.webp?updated=1635250994567'
      },
      {
        id: shortId.generate(),
        src: 'https://ccdn.lezhin.com/v2/banners/explore_boys/images/17303.webp?updated=1634553971673s'
      }
    ],
    Comments: [
      {
        id: shortId.generate(),
        User: {
          id: shortId.generate(),
          nickname: 'user1'
        },
        content: '코멘트1'
      },
      {
        id: shortId.generate(),
        User: {
          id: shortId.generate(),
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
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
}

// 액션 이름을 상수로 빼둔다=>오타확률을 낮춘다
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'

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
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'foo'
  },
  Images: [],
  Comments: []
})

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'seolranlee'
  }
})

// reducer => 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단 불변성은 지키면서)
const reducer = (state = initialState, action) => {
  // immer의 기본 format
  // state가 이름이 draft로 바뀐다.
  // draft는 불변성 상관없이 막 바꿔도 되낟.
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true
        draft.addPostDone = false
        draft.addPostError = null
        break
      case ADD_POST_SUCCESS:
        console.log('ADD_POST_SUCCESS draft:', draft)
        draft.mainPosts.unshift(dummyPost(action.data))
        draft.addPostLoading = false
        draft.addPostDone = true
        break
      case ADD_POST_FAILURE:
        draft.addPostLoading = false
        draft.addPostError = action.error
        break
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true
        draft.removePostDone = false
        draft.removePostError = null
        break
      case REMOVE_POST_SUCCESS:
        // 삭제 시엔 filter가 편함.
        // immer의 의미론적으로는 slice로 제거하는게 더 맞긴함.
        draft.mainPosts = state.mainPosts.filter((v) => v.id !== action.data)
        draft.removePostLoading = false
        draft.removePostDone = true
        break
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false
        draft.removePostError = action.error
        break
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true
        draft.addCommentDone = false
        draft.addCommentError = null
        break
      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break
        // const post = draft.mainPosts.find((v) => v.id === action.data.postId)
        // post.Comments.unshift(dummyComment(action.data.content))
        // draft.addCommentLoading = false
        // draft.addCommentDone = true
        
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId)
        // const post = {...state.mainPosts[postIndex]}
        // post.Comments =  [dummyComment(action.data.content), ...post.Comments]
        // const mainPosts = [...state.mainPosts]
        // mainPosts[postIndex] = post
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true
        // }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false
        draft.addCommentError = action.error
        break
      default:
        break
    }
  })
  
}

export default reducer