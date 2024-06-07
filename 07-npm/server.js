const http=require('http')
const fs = require('fs') // 파일을 가져다 쓸 때 파일을 관리해주는 파일 시스템 모듈

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data)
        }
    })
});
server.listen(8000, () => {
    console.log('8000 서버 실행');
})