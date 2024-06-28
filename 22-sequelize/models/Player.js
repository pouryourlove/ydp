const { DataTypes } = require("sequelize");

//player 모델 정의
const playerModel = (sequelize,DataTypes) => {
    // sequelize 매개변수: models/index.js에서의 sequalize (db 연결 정보를 입력하여 생성한 객체)
    // dataTypes 매개변수: models/index.js에서의 Sequelize (sequelize 패키지 자체)

    //sql에서 create의 역할을 하는 define 
    const player = sequelize.define(
        //param1: 모델 이름 설정
        'player',
        //param2: 모델 컬럼 정의
        {
        player_id:{
            // player_id int not null primary key auto_increment -> 이렇게 sql문으로 바꿔줌
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            // name varchar(63) not null
            type: DataTypes.STRING(63),
            allowNull: false,
        },
        age: {
            //age int not null 
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    },

    // param3: 모델 옵션 정의
    {
        freezeTableName: true, // 테이블 명 고정
        // timestamps: false, //데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
    });

    return player;
}

module.exports = playerModel;