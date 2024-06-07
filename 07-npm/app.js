const http = require('http');
http.createServer(function(req,res){
    // send http 
    // http status 200은 정상적인 응답
    // Content-Type : text /plain
    // res.writeHead(200, {'Content-Type': 'text/plain'}) //컨텐츠 타입은 그냥 text임
    res.writeHead(200, {'Content-Type': 'text/html'}) //컨텐츠 타입이 태그로 이 응답이 어떤 형식으로 나와야 하는지 알려줌.
    
    res.end(`<h2>Hello World</h2>`)

}).listen(8080, () => {
    console.log('8080포트에서 실행 중')
});
