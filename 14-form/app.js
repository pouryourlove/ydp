const express = require('express'); //express 모듈을 가져오기
const app = express(); //express 애플리케이션 객체 생성
const PORT = 8888;//서버가 실행될 포트 번호


app.set('view engine','ejs') // 뷰 엔진이 ejs임을 알려줌
app.set('views','./views') // 뷰들이 위치하게 될 폴더 위치를 알려줌

//미들웨어(middleware) 연결
//: 요청(request)과 응답(response)의 중간에서 작업함
// express 에서는 app.use()로 등록해야 함. 
//e.g. body-parser 모듈
app.use(express.urlencoded({extendned:true}));
//urlencoded로 파싱(풀어헤친다) 된 body를 요청 -> post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json())
//요청의 body 객체에 json 형태(일단은 js object와 유사한 것으로 알고 있자)로 온다. 


//라우팅 (routing) -> 주소를 설정한다. 
// localhost:PORT/ 경로로 접속햇을 때, index.ejs를 응답하겠다.
app.get('/',(req,res) => {
    res.render('index', {title:'폼 실습을 해봅시다'});
})

app.get('/getForm',(req, res) => {
    console.log(req.query); // { id: 'banana', pw: '1234' }
    // res.send('get 요청 성공!')
    res.render('result',{title: 'get 요청 결과',userInfo:req.query})
    //userInfo:req.query => userInfo: { id: 'banana', pw: '1234' }
})

app.post('/postForm', (req, res) => {
    console.log(req.body); //req객체의 body에 정보가 저장된다. //undefined -> body parser가 없기 때문에..그래서 받으려면 body-parser 써야 한다. 
    // res.send('post 요청 성공')
    res.render('result',{title: 'post 요청 결과',userInfo:req.body})
})

//listen(포트번호, 서버가 실행되었을 때 실행할 콜백함수): 서버 시작 메서드
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

//res.send(): 문자열, json, 파일 등을 클라이언트에게 응답(json을 가장 많이 응답)
// -> 서버가 데이터를 응답할 때 send() 사용 
//res.render(뷰, 데이터): 템플릿 엔진을 사용해서 서버 측에서 "동적으로" html을 생성하고 클라이언트에게 응답을 함
// -> 서버측에서 동적으로 페이지를 렌더링 할 때 render() 사용
// -> 뷰: views/폴더의 ejs 파일을 연결 
// -> 데이터: 뷰의 넣어줄 정보
//form method : get, post
//get: 
//정보를 가져오거나 검색할 때 쓰임. 
//get 요청시 backend로 보내야하는 데이터가 있다면 url 쿼리 문자열에 데이터를 실어서 전송. 
//서버의 값이나 상태를 변경 하지 않고 조회
//폼에 입력한 정보가 url에 추가되어 보임
//post:
//무언가를 생성하거나 어떤 정보를 보낼 때 쓰임
//보내야하는 데이터는 요청의 본문에 실어서 전송
//request body에 실어져서 보내진다. 정보 안보임.
//브라우저에 엔터치는건 다 get방식
