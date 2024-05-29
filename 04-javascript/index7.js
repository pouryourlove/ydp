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
function loginUser(){
    let inputId = prompt('아이디입력')
    let inputPw = prompt('비밀번호 입력')

    // q) userid 와 inputid가 같다면
    //--userpw와 inputpw 비교
    //q) inputid에 반값이 입력이 됐따면?
    //--아이디입력안함이라는 문구를 반환
    //q)두 경우가 아니라면? (inputid가 틀렸을 때)
    //-- 아이디 틀림 문구를 반환

    if(userId === inputId){
        if(userPw === inputPw){
            return '로그인 성공'
        }else{
            return '비밀번호 오류'
        }
    } else if(inputId === ''){
        return '아이디 입력안함';
    } else {
        return '아이디 틀림! 로그인 실패';
    }
}

const result = loginUser(); 
console.log(result)