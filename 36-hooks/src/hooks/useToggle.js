 import React,{useState} from 'react'
 
 //매개변수를 false로 초기화
 function useToggle(initvalue = false) {
    const [value, setValue] = useState(initvalue)
    // value = 토글의 상태 
    // setValue = 토글 상태를 변화 시키는 setter

    //토글 상태를 전환
    const toggleValue = () => {
        setValue(!value);
    }
   return [value, toggleValue]

   //두 가지 값을 반환 할 것!
   //하나는 현재의 상태 (value)
   //다른 하나는 상태를 전환하는 함수 (toggleValue) 입니다.
 }
 // 커스텀 훅에서는 'props'라는 개념이 사용되지 않음
 //대신 함수의 매개변수를 통해 초기값을 설정 가능
 //커스텀 훅은 일반 js 함수로 훅이 호출될때 매개변수로 값을 전달받아요
 //이 값들은 훅 내부에서 상태를 초기화 하거나 설정하는 데 사용된다.

 export default useToggle



 // 훅 만드는 과정 
 // 1. 훅의 목적 정의
 //- 커스텀 훅이 해결하려는 문제나 제공할 기능을 정의
 // 2. 훅의 기능 설계
 //- 훅의 어떤 상태와 이펙트를 사용할지 설계
 // 3. 훅 구현.