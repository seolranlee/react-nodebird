module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 users로 테이블 생성. // 시퀄라이즈와 mysql간의 규칙.
    // id가 기본적으로 들어있다.
    // column들. // 세로줄
    email: {
      // column들에 대한 설명
      type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTERGER, FLOAT, DATETIME
      allowNull: false, // 입력 필수
      unique: true,  // 중복 불허
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      // 비밀번호는 암호화를 하기 때문에 길이를 넉넉하게 잡는다.
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',  // 한글 저장
  })
  User.associate = (db) => {
    // 모델간의 관계 설정
    // 유저가 포스트를 여러개 쓸 수 있다.
    db.User.hasMany(db.Post)
    db.User.hasMany(db.Comment)
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' })

    // User와 User끼리 할 때에는 foreignKey가 필요하다.
    // 나를 팔로잉 하는 사람들을 찾으려면 나(following)를 먼저 찾아야 해서 foreignKey는 FollowingId
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' })
    // 내가 팔로잉 하는 사람들을 찾으려면 나(follower)를 먼저 찾아야 해서 foreignKey는 FollowerId
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'})
  }
  return User;
}