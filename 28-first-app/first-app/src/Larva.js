//컴포넌트 작성법
//1. function 만들기
//2. return ()안에 html 작성
//3, <함수명></함수명> or <함수명 />도 가능

//화살표 함수도 가능!
//const Larva = () => {}

// q) 언제 사용하면 좋은가?
// a) 반복적인 html 축약 버전으로 사용
// a) 큰 페이지
// a) 자주 변경되는 ui. 
// + 장점) html 더러운걸 깔끔하게 정리 할 수 있ㄷ. (div)
// 다른사람이 봐도, 나중에 미래의 내가 봐도 한눈에 이 컴포넌트가 무슨 용도의 html인지 쉽게 알 수 있다.


// 지역변수 개념
import './Larva.css'

function Larva(){
    return (
        <>
    <div className="container">
        <div className="circle item1"></div>
        <div className="circle item2"></div>
        <div className="circle item3"></div>
        <div className="circle item4"></div>
        <div className="circle item5"></div>
    </div>
        
        </>
    )
}

export default Larva