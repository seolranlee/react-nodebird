module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', { // MySQL에는 Hashtags로 테이블 생성. // 시퀄라이즈와 mysql간의 규칙.
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',  // 한글 저장 + 이모티콘 저장
  })
  Hashtag.associate = (db) => {}
  return Hashtag;
}