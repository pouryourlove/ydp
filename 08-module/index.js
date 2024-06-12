/**
 * js 엔진, 구글:v8 + c++ = node.js(브라우저 밖에서 js 사용하기 위해 만든것), 스파이더몽키, webkit ...
 * 모듈에는 사용자가 만든 모듈이 있고 시스템 모듈, 빌트인모듈이 있다.
 */

// const add = (a,b) => {
//     return a+b
// }

// export해서 다른 파일이 불러와서 사용할 수 있게끔 만들어줘야함
// 모듈단위가 된다. 모듈을 불러올 때 require()사용 - commonJS , es6 (import)

// console.log(__dirname);///Users/sba/Documents/github/ydp/08-module 디렉토리
// console.log(__filename);///Users/sba/Documents/github/ydp/08-module/index.js 파일네임까지 보여줌


// const add = require('./add');
// console.log(add(1,2));
// console.log('from index.js');

// scope (범위) 모듈은 각각의 범위를 가지고 있다.
// require('./batman');
// require('./superman');
//같은 변수일지라도 모듈별로 각각 관리된다. 

//모듈의 기초형태

//()() 함수의 자동실행
(function(){
    const superHero = "Superman";
    console.log(superHero);
})()
//이것이 모듈의 기본 형태다
//모듈의 형태. 인자가 5개있다.
(function(exports,require, module, __filename, __dirname
){
    코드
})()