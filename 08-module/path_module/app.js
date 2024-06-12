/**
 * path.join() : 여러인자를 넣으면 하나의 경로로 합쳐준다.
 * path.resolve(): path.join() 비슷하지만 약간의 차이가 있다.
 * path.parse(): 파일경로를 root, dir, base, ext, name 구분
 * path.format(): path.parse()한 객체를 파일 경로로 합친다.
 */

const path = require('path')
console.log(path.basename(__dirname));//path_module
console.log(path.basename(__filename));//app.js
console.log(path.join('a','b','index.html'))//a/b/index.html

console.log('---------------------');
let pathname = path.parse('/home/user/dir/file.txt')//parse는 구문 해석해주는것
console.log(pathname);

console.log('======================');
console.log(path.extname('/home/user/dir/file.txt'))//확장자 이름 .txt
console.log(path.basename('/home/user/dir/file.txt'))//파일 이름 file.txt


