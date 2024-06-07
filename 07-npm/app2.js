// //서버를 3000포트로 열고 hello 본인이름 h2 태그 사용해서 나오게끔. 

// const http = require('http')
// http.createServer( function (req,res){
//     res.writeHead(200, {'content-type':'text/html'} )
//     res.end(`<h2>hello juyeon</h2>`)

// }).listen(3000, function(){
//     console.log('3000포트 사용')
// })

const http = require('http');
http.createServer(function(req, res){
    var _url =req.url;
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(`<h2>Hello</h2><p> ${_url}</p>`)
}).listen(8000, () => {
    console.log('서버실행')
})