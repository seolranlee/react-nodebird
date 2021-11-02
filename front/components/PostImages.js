import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { PlusOutlined } from '@ant-design/icons'

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false)

  const onZoom = useCallback(() => {
    setShowImagesZoom(true)
  }, [])
  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
      </>
    )
  }
  if (images.length === 2) {
    return (
      <>
        <img role="presentation" style={{ display: 'inline-block', width: '50%' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{ display: 'inline-block', width: '50%' }} src={images[1].src} alt={images[1].src} onClick={onZoom} />
      </>
    )
  }
  return (
    <>
      <img role="presentation" style={{ display: 'inline-block', width: '50%' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
      <div
        role="presentation"
        style={{ display: 'inline-block', width: '50% !important', textAlign: 'center', verticalAlign: 'middle' }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}개의 사진 더 보기
      </div>
    </>
  )

}

PostImages.propTypes = {
  // shape: object 타입을 더 자세히 명시해두고 싶을 때 쓴다.
  images: PropTypes.arrayOf(PropTypes.object)
}

export default PostImages