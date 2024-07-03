//빈 객체 생성
const nickObjs = {};
console.log(nickObjs);


//id 속성을 가진 객체로 생성
const socket = {id:'asdfsdfsd'}
console.log("socket : ", socket)

//js에서 obj에 key, value 추가하는 방법
//[1] '.' 연산자를 사용한 속성 추가
nickObjs.hello = '안녕';
nickObjs.hi = '안녕2';

//[2] '[]'을 사용한 속성 추가
nickObjs['apple'] = '사과';

// [3] 변수를 이용한 속성 추가
nickObjs[socket.id] = 'yuuka';


console.log(nickObjs);

// js 에서 객체에 특정 key가 존재하는지 검사
const nickObjs2 = {hello: '안녕', apple: '사과'};
const nick1 = '안녕';
const nick2 = '사과';
const nick3 = '오렌지'; 
console.log('nickObjs2', nickObjs2) 

//Object.values(): object에서 value만 뽑아서 배열로 만들어줌
//js 내장 함수
console.log(Object.values(nickObjs2));
console.log(Object.values(nickObjs2).indexOf(nick1));
console.log(Object.values(nickObjs2).indexOf(nick2));
console.log(Object.values(nickObjs2).indexOf(nick3));
// nick3는 nickObjs2에 존재하지 않기 때문에 -1

console.log('------------------------');

//for in 반복문
for(let key in nickObjs2){
    console.log(key, nickObjs2[key]); //key, value
}

//object 요소 삭제
console.log(nickObjs2)
delete nickObjs2['hello'];
console.log('삭제후:',nickObjs2);