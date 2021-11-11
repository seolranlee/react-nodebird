module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { // MySQL에는 Comments로 테이블 생성. // 시퀄라이즈와 mysql간의 규칙.
    content: {
      type: DataTypes.text,
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',  // 한글 저장 + 이모티콘 저장
  })
  Comment.associate = (db) => {}
  return Comment;
}