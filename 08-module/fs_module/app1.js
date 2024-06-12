//디렉토리 읽기
const fs = require('fs') //파일 관리자
// fs.readdir('./', function(err, files){
//     if(err) console.log('에러',err)
//     else console.log('결과는', files)    
// })


//파일 생성 내용있는 파일 생성된다
// fs.writeFile('mynewfile1.text', 'hello world', function(err){
//     if(err) throw err;
//     console.log('파일이 생성됨')
// })

//open(), w를 이용해서 파일 생성 // w는 write의 약자 컨텐츠 없이 빈파일 만들어줌 
// fs.open('mynewfile2.txt', 'w', function(err,file){
//     if(err) throw err;
//     console.log('파일 생성됨');
// })

// 파일생성  appendFile() 추가, 기존 파일이 있다는걸 전제로 한다.

fs.appendFile('mynewfile1.text','kim', function(err){
    if(err) throw err;
    console.log('파일 생성됨');
})