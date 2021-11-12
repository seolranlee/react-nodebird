module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // MySQL에는 Posts로 테이블 생성. // 시퀄라이즈와 mysql간의 규칙.
    content: {
      // 글자수 무제한
      type: DataTypes.TEXT,
      allowNull: false
    }
    // RetweetId
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',  // 한글 저장 + 이모티콘 저장
  })
  Post.associate = (db) => {
    // 게시글은 작성자에게 속해있다.
    db.Post.belongsTo(db.User)
    db.Post.hasMany(db.Comment)
    db.Post.hasMany(db.Image)
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' })
    // 추후에 as에 따라서 post.getLikers처럼 게시글에 좋아요를 누른 사람을 가져오게 된다.
    // through도 대문자, 별칭도 대문자.
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' })
    // 트위터의 리트윗 기능 때문에
    db.Post.belongsTo(db.Post, { as: 'Retweet' })
  }
  return Post;
}