module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', { // MySQL에는 Images로 테이블 생성. // 시퀄라이즈와 mysql간의 규칙.
    src: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',  // 한글 저장
  })
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post)
  }
  return Image;
}