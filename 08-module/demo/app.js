var http = require('http');
var url = require('url');
var fs = require('fs');
//127.0.0.1:3000 포트로 접속해서 winter.html, summer.html를 브라우저에 띄우려함
http.createServer(function(req, res){
    // req에 사용자가 원하는 파일을 적어줘야함.  //localhost:3000/summer.html
    var q = url.parse(req.url , true); //req.url: /summer.html
    var filename = '.'+q.pathname; //./summer.html

    //파일 읽어오라고 하기

    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('file not found') //이건 왜 res.write 아니고 res.end에? 
        }
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(data) //summer.html winter.html 불러옴. 
        return res.end() // 끝내기
    })
}).listen(3000, () => {
    console.log('3000포트에서 서버 실행중');
})
