const express = require('express')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views')

const indexRouter = require('./routes/index'); //index생략하고 폴더만 써도 대표 파일 index 보여줌
app.use ('/', indexRouter) 
// - > 기본 요청 주소: '"localhost:PORT"

const userRouter = require('./routes/user');
app.use('/user', userRouter)

//404
// 맨 마지막 라우트(주소)로 선언: 그렇지 않으면 나머지 라우팅(주소를 설꼐한 행위)이 전부 무시됨
// * -> 가장 밑에 있으면 위에 있는 get 루트 제외하고 나머지
app.get('*', (req,res) => {
    res.render('404')
})

app.listen(PORT, () =>{
    console.log(`http:/localhost:${PORT}`)
});
