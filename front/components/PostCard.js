import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Popover, Button, Avatar } from 'antd'
import { EllipsisOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import PostImages from './PostImages'

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [commentFormOpened, setCommentFormOpened] = useState(false)
  // const { me } = useSelector((state) => state.user)
  // const id = me && me.id와 같은 문법. 옵셔널 체이닝 연산자. me가 있으면 me.id가 할당되고 없으면 undefined 할당
  // const id = me?.id

  // const id = useSelector((state) => state.user.me && state.user.me.id)
  const id = useSelector((state) => state.user.me?.id)

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev)
  }, [])
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev)
  }, [])

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images?.[0] && <PostImages images={post.Images}/>}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked 
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} /> 
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button tyep="danger">삭제</Button>
                  </>
                ) : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
      >
        <Card.Meta 
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && (
        <div>
          댓글 부분
        </div>
      )}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  )
}

PostCard.propTypes = {
  // shape: object 타입을 더 자세히 명시해두고 싶을 때 쓴다.
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.shape({
      id: PropTypes.number,
      nickname: PropTypes.string
    }),
    content: PropTypes.string,
    createdAt: PropTypes.object,
    // arrayOf(PropTypes.object): 객체들의 배열이라는 뜻
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired
}
export default PostCard