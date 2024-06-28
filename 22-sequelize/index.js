const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index')
const { sequelize } = require('./models');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router) // routes/index에서 router 불러오기

sequelize
    // force : true; 서버 실행때 마다 테이블을 재 생성
    // force : false; 서버 실행 시 테이블이 없으면 생성
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('database connection succeeded');
            console.log(`server is running! port number is ${PORT} ...`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

