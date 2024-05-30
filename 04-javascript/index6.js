//함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합

//용어 정리 
//-함수 정의(선언): 함수를 "생성"
//-함수 호출: 함수를 "사용"

//함수 선언 방식
// #1. 명시적 함수 선언(=함수 선언문)
//-함수 이름과 매개변수를 명시하고 함수의 본문을 중괄호로 감싼다.
//-스크립트 어디에서든 호출 할 수 있다.
//-"function"키워드를 사용하여 함수를 선언하는 방식이다.

function helloWorld(){ //함수 정의
    //return 키워드 생략 가능 (특정한 값이 도출되어야 할때는)
    console.log("hello, world");
}

helloWorld(); //함수 호출

function helloWorld2(){
    return 'Hello, world'
}

//return ? (반환값)
//:함수 내부(body, block) 코드의 최종결과값
//최종 결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단
// (return 다음에 코드 더 작성 의미 x)


console.log(helloWorld2());


// #2. 함수 표현식 (function expression)
//변수에 익명 함수를 할당(저장)하는 형태
//변수가 선언된 이후에만 호출 할 수 있다.

//*익명함수 - 말 그대로 이름이 없는 함수
//이름을 지정할 수도 있음
//이 경우 함수 이름은 내부에서만 사용 가능! 블록 스코프 안에서만 함수명사용
//e.g.

const sayHello = function hello() {
    console.log("hello, world! 3");
}

sayHello()
// hello()//error 내부에서만 사용 가능하다 이렇게 바깥에서 못쓴다.

const helloWorld3 = function(){
    console.log("hello, world3");
}

const helloWorld4 = function(){
    return "hello, world4";
}

helloWorld3()
console.log(helloWorld4())
helloWorld3()
helloWorld3()
helloWorld3()
helloWorld3()
console.log("----------------");
//함수는 여러번 호출이 가능하다.

///////////////////////////////////////
//매개변수가 있는 함수는 어떻게?
//매개변수가 1개일때
function food(text){
    return text;
}
  
console.log(food("제육덮밥")); //제육덮밥

const pizza = "피자는 역시 하와이안 피자!"
console.log(food(pizza));

const colaprice = 2000;
console.log((food(colaprice)));//2000 => number;
//매개변수는 어떤 데이터 타입이어도 상관없다!

//매개변수 2개
function music(name, title){
    return `${name} - ${title}`
}

console.log(music('아이유','잔소리'));
console.log(music('데이식스','예뻤어'));

function music2(name, title){
    console.log(`${name} - ${title}`)
}
music2('악뮤','후라이의 꿈')

//#3. 화살표 함수(arrow function) (es6부터 지원)
//함수 표현식의 축약형, 간결하게 정의
//단일 표현식의 경우에는 중괄호와 return 키워드 생략 가능!
//코드가 길어진다면(여러줄) 중괄호와 return 키워드 명시! 

//일반형(단일 표현식) 
function square(x){
    return x*x;
}
//축약형
const square = (x) => x * x;
console.log(sqaure(3)); //9

// 일반형(여러줄)
function triangle(base, height){
    const area = (base * height) /2;
    return area;
}

// 축약형
const triangle = (base, height) => {
    const area = (base * height) /2;
    return area;
}

console.log(triangle(3,4));//6

// 호이스팅(hoisting) -> 함수,변수
// js에서 변수 및 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상
// 함수 선언문이 호이스팅
sayHello(); //함수 호출을 정의 보다 먼저 했다.
function sayHello(){
    console.log("hello~")
}
// --정상 출력.

// 함수 표현식
// -호이스팅의 대상이 될 수 없음
// -why? 
// -변수에 함수가 할당되기 때문에 그 이후에만 호출 가능! 

const sayHello2 = () => {
    console.log("hello2")
}


