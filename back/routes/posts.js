const express = require('express')
const { User, Image, Post, Comment } = require('../models')
const router = express.Router()

router. get('/', async (req, res, next) => { // GET /posts (여러개의 게시물(복수) => 단수, 복수 나누는 건 스타일 차이)
  try {
    const posts = await Post.findAll({
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC']
      ],
      include: [{
        model: User,
        // User모델 가져올 때 항상 주의할 점: password는 빼줘야 한다. 
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        // 댓글 작성자 표기를 위해 Comment model 안에서 한번 더 User model include
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }],
    })
    console.log(posts)
    res.status(200).json(posts)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router