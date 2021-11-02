import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'
import useInput from '../hooks/useInput'
import { useSelector } from 'react-redux'

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id)
  const [commentText, onChangeCommentText] = useInput('')
  const onSubmitComment = useCallback(() => {
    // post를 받아온 이유: 게시글 id아래에 댓글을 달거기 때문에
    console.log(post.id, commentText)
  }, [commentText])

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button style={{ position: 'absolute', right: 8, bottom: -48 }} type="primary" htmlType="submit">write</Button>
      </Form.Item>
    </Form>
  )
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired
}

export default CommentForm