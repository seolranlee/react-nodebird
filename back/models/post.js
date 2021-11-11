module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // MySQL에는 Posts로 테이블 생성. // 시퀄라이즈와 mysql간의 규칙.
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',  // 한글 저장 + 이모티콘 저장
  })
  Post.associate = (db) => {}
  return Post;
}