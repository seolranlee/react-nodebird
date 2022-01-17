const express = require('express')
const { Post, Image, Comment, User } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router()
router.post('/', isLoggedIn, async (req, res) => {  // POST /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    })
    // 기본적인 정보 + 필요한 정보들을 include로 가져온다.
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image
      }, {
        model: Comment,
        include: [{
          model: User,  // 댓글 작성자
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User,  // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User,  // 좋아요 누른 사람
        // 댓글, 게시글 작성자와 구별하기 위해
        as: 'Likers',
        attributes: ['id']
      }]
    })
    res.status(201).json(fullPost)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {  // POST /post/1/comment
  try {
    // 서버쪽에서 좀 더 꼼꼼히 방어.
    // 존재하지 않은 포스트에 코멘트를 다는 행위를 시도하지 못하게. 
    const post = await Post.findOne({
      where: { id: req.params.postId }
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.')
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }]
    })
    res.status(201).json(fullComment)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.patch('/:postId/like', async (req, res, next) => { // PATCH /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } })
    if (!post) {
      // 금지
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    // DB 조작 시에는 항상 await을 붙인다.
    await post.addLikers(req.user.id)
    res.json({ PostId: post.id, UserId: req.user.id })
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.delete('/:postId/like', async (req, res, next) => {  // DELETE /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } })
    if (!post) {
      // 금지
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.removeLikers(req.user.id)
    res.json({ PostId: post.id, UserId: req.user.id })
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.delete('/', (req, res) => {  // DELETE /post
  res.json({ id: 1 })
})
module.exports = router