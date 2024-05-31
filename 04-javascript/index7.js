// 조건문

//if문
if( 5 >3 ){
    console.log("집가고 싶다")
}

// let number = Number(prompt('숫자를 입력해주세요'))
//1. prompt()로 사용자로부터 값을 입력 받고(문자열)
//2. number()문자열 -> 숫자형 형변환

//아래와 동일한 코드
//let number2 = prompt("숫자를 입력해주세요")
//number2 = Number(number);

// if(number > 10){
//     console.log(`입력한 수는 10보다 크다`);
// }else{
//     console.log('입력한 수는 10보다 작다')
// }

// if(number > 10){
//     console.log('입력한 수는 10보다 크다');
// }else if(number === 10){
//     console.log('입력한 수는 10이다')
// }else{
//     console.log('입력한 수는 10보다 작다')
// }

// if(number > 100 || number < 0){
//     console.log('입력값이 잘못되었습니다.')
// }else if(number >= 90){
//     console.log('a')
// }else if(number >=80){
//     console.log('b')
// }else if(number >= 70){
//     console.log('c')
// }else if(number >= 60){
//     console.log('d')
// }else{
//     console.log('f')
// }

//중첩 if문
let userId = 'user01'
let userPw = '1234'

//id, pw 검사하는 함수
// function loginUser(){
//     let inputId = prompt('아이디입력')
//     let inputPw = prompt('비밀번호 입력')

    // q) userid 와 inputid가 같다면
    //--userpw와 inputpw 비교
    //q) inputid에 반값이 입력이 됐따면?
    //--아이디입력안함이라는 문구를 반환
    //q)두 경우가 아니라면? (inputid가 틀렸을 때)
    //-- 아이디 틀림 문구를 반환

//     if(userId === inputId){
//         if(userPw === inputPw){
//             return '로그인 성공'
//         }else{
//             return '비밀번호 오류'
//         }
//     } else if(inputId === ''){
//         return '아이디 입력안함';
//     } else {
//         return '아이디 틀림! 로그인 실패';
//     }
// }

// const result = loginUser(); 
// console.log(result)

// -----------------------------------
//switch무ㄴ
//-하나 이상의 case문으로 구성.
//-default가 필수는 아니지만, 사용하길 권장. = if문의 else 같은 존재.
//ㄴswitch 내의 모든 case가 매칭 되지 않을 때 실행
//-여러개의 case문을 묶을 수도 있다.
//-break;
//ㄴ조건을 빠져나갈 때 사용하는 키워드.

let a = 3; 
switch(a){
    case 1:
    case 2:
    case 3:
        console.log("a가 1~3이군요!")
        break;
    case 4:
        console.log("a가 4이군요!");
        break;
    default:
        console.log("a가 무슨 값인지 모르겠습니다.");
        break;        
}

//실습
//quiz)학점 계산기
//조건) 0~100외 숫자는 들어오지 않는다고 가정
    //    a ~ f
//힌트) number/parseIn(), 10진수

let score = 40;
switch(true){
    case score <= 100 && score>90:
        console.log('a');
        break;
    case score>80:
        console.log('b');
        break;
    case score>70:
        console.log('c');
        break;
    case score>60:
        console.log('d');
        break;
    case score>50:
        console.log('f');
        break;
    default:
        console.log('not found')                   
}

// 삼항 연산자
//조건식 ? a : b
//조건식이 참이면 a 거짓이면 b
//if문을 간단하게!

let num =5;
//일반 if문
if(num%2 === 1){
    console.log("홀수")
} else {
    console.log("짝수")
}

//삼항 연산자
num%2 === 1 ?console.log('홀수') :console.log('짝수')

//실습 -new date
//내장 함수 - 현재 날짜와 시간을 나타내는 js date 객체를 반환.
//내장 함수?
//js 엔진이 기본적으로 제공하는 함수.
//개발자가 별도로 정의하지 않아도 사용할 수 있는 함수
//전역 객체에 속해 있어 어디서든 접근 가능하고 바로 사용 가능!

let now = new Date().getHours();
now>=12 ? console.log('오후'): console.log('오전')



