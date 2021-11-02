import React from 'react'
import PropTypes from 'prop-types'

const PostImages = ({ images }) => {
  return (
    <div>구현중...</div>
  )

}

PostImages.propTypes = {
  // shape: object 타입을 더 자세히 명시해두고 싶을 때 쓴다.
  images: PropTypes.arrayOf(PropTypes.object)
}

export default PostImages