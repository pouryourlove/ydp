
const Sequelize = require('sequelize'); //sequalize 패키지를 불러옴
const config = require(__dirname + '/../config/config.json')['development']; //confiig.json의 development를 뽑아줌(객체에서). db 연결정보 
const db = {}; // 빈 객체

const sequelize = new Sequelize(config.database, config.username, config.password, config); //여기서 config는 왜 넣어줬지?
// seuqalize 객체를 만든것

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize : sequelize, Sequelize: Sequelize}

//모델 불러오기
const playerModel = require('./Player')(sequelize,Sequelize); //playerModel함수를 불러오고 이 자리에서 호출함. 그리고 반환값을 playerModel에 넣어줌.
const TeamModel = require('./Team')(sequelize, Sequelize);
const profileModel = require('./profile')(sequelize, Sequelize);

//모델간 관계 연결
// 1) plater: profile =  1 : 1
//하나의 선수당 하나의 프로필을 가져야함
playerModel.hasOne(profileModel, { 
  //CASCADE 옵션: player가 삭제/ 수정되는 경우 profile도 함께 삭제/ 업데이트
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  //profilmodel에 player_id 이름의 fk 생성
  foreignKey: 'player_id',
  //playermodel 'player_id 컬럼 참조
  sourceKey: 'player_id'

});

profileModel.belongsTo(playerModel, {
  //profilemodel에 'player_id' fk 생성
  foreignKey: 'player_id',
  //참조하게 될 playermodel의 키는 'player_id'
  targetKey: 'player_id'
})

// 2) Team: Player = 1: N
// 한 팀에는 여러 명의 선수가 존재

TeamModel.hasMany(playerModel, {
  // playermodel에 team_id fk 생성
  foreignKey: 'team_id',
  // teammodel에서 참조될 키가 'team_id'
  sourceKey: 'team_id'
});
playerModel.belongsTo(TeamModel, {
  //playermodeldp team_id fk 생성
  foreignKey: 'team_id',
  //참조하게 될 teammodel의 키는 team_id
  targetKey: 'team_id'
})

db.Player =playerModel;
db.Team = TeamModel;
db.Profile = profileModel;
// db = {sequelize : sequelize, Sequelize: Sequelize, player: playerModel}

module.exports = db;
// db 객체를 모듈로 내보냄 (-> 다른 파일에서 db 모듈을 사용할 예정)
