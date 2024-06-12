//파일 삭제
const fs = require('fs');
// fs.unlink('mynewfile2.txt', function(){
//     console.log('파일삭제');
// })

// 파일이름변경
fs.rename('mynewfile1.text','renamefile1.txt', function(err){
    if(err) throw err;

    console.log('파일 이름 변경 완료');
})