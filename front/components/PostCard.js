import React from 'react'
import PropTypes from 'prop-types'

const PostCard = ({ post }) => {
  return (
    <div>{post.content}</div>
  )
}

PostCard.propTypes = {
  post: PropTypes.string.isRequired
}
export default PostCard